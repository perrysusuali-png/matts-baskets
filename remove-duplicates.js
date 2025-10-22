const { supabaseServer } = require('./src/app/lib/supabase');

async function removeDuplicateProducts() {
  try {
    // Fetch all products
    const { data: products, error: fetchError } = await supabaseServer
      .from('products')
      .select('*');

    if (fetchError) {
      console.error('Error fetching products:', fetchError);
      return;
    }

    // Group products by image
    const imageGroups = {};
    products.forEach(product => {
      if (!imageGroups[product.image]) {
        imageGroups[product.image] = [];
      }
      imageGroups[product.image].push(product);
    });

    // Find duplicates and collect IDs to delete
    const idsToDelete = [];
    for (const image in imageGroups) {
      const group = imageGroups[image];
      if (group.length > 1) {
        // Keep the first one, delete the rest
        for (let i = 1; i < group.length; i++) {
          idsToDelete.push(group[i].id);
        }
      }
    }

    if (idsToDelete.length === 0) {
      console.log('No duplicate products found.');
      return;
    }

    // Delete duplicate products
    const { error: deleteError } = await supabaseServer
      .from('products')
      .delete()
      .in('id', idsToDelete);

    if (deleteError) {
      console.error('Error deleting duplicates:', deleteError);
      return;
    }

    console.log(`Deleted ${idsToDelete.length} duplicate products.`);
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

removeDuplicateProducts();