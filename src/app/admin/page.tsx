'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`;

const AuthSection = styled.section`
  padding: 4rem 2rem;
  max-width: 400px;
  margin: 0 auto;

  .auth-container {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }

  h2 {
    text-align: center;
    color: #2e7d32;
    margin-bottom: 2rem;
  }
`;

const DashboardSection = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h2 {
    color: #2e7d32;
    margin: 0;
  }

  button {
    background: #dc3545;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background: #c82333;
    }
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2e7d32;
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0.5rem 0;
    color: #666;
    font-size: 0.9rem;
  }

  .price {
    font-weight: bold;
    color: #c99b44;
    font-size: 1.1rem;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;

    button {
      flex: 1;
      padding: 0.5rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.2s;

      &.edit {
        background: #007bff;
        color: white;

        &:hover {
          background: #0056b3;
        }
      }

      &.delete {
        background: #dc3545;
        color: white;

        &:hover {
          background: #c82333;
        }
      }
    }
  }
`;

const AddProductBtn = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    background: #218838;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;

  h3 {
    color: #2e7d32;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input, textarea {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 1rem;

      &:focus {
        outline: none;
        border-color: #2e7d32;
      }
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    .actions {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;

      button {
        flex: 1;
        padding: 0.75rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;

        &.save {
          background: #28a745;
          color: white;

          &:hover {
            background: #218838;
          }
        }

        &.cancel {
          background: #6c757d;
          color: white;

          &:hover {
            background: #545b62;
          }
        }
      }
    }
  }
`;

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    // Check if user is logged in
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchProducts();
    }
  }, [user]);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id');

    if (error) {
      console.error('Error fetching products:', error);
    } else {
      setProducts(data || []);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({ name: '', description: '', price: '', image: '' });
    setShowModal(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      image: product.image || ''
    });
    setShowModal(true);
  };

  const handleDeleteProduct = async (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) {
        alert('Error deleting product: ' + error.message);
      } else {
        fetchProducts();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      ...(formData.image && { image: formData.image })
    };

    let result;
    if (editingProduct) {
      result = await supabase
        .from('products')
        .update(productData)
        .eq('id', editingProduct.id);
    } else {
      result = await supabase
        .from('products')
        .insert([productData]);
    }

    if (result.error) {
      alert('Error saving product: ' + result.error.message);
    } else {
      setShowModal(false);
      fetchProducts();
    }
  };

  if (loading) {
    return (
      <AdminContainer>
        <Navbar activePage="admin" />
        <AuthSection>
          <div className="auth-container">
            <h2>Loading...</h2>
          </div>
        </AuthSection>
        <Footer />
      </AdminContainer>
    );
  }

  if (!user) {
    return (
      <AdminContainer>
        <Navbar activePage="admin" />
        <AuthSection>
          <div className="auth-container">
            <h2>Admin Login</h2>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={['google']}
              redirectTo={`${window.location.origin}/admin`}
            />
          </div>
        </AuthSection>
        <Footer />
      </AdminContainer>
    );
  }

  return (
    <AdminContainer>
      <Navbar activePage="admin" />
      <DashboardSection>
        <DashboardHeader>
          <h2>Admin Dashboard</h2>
          <div>
            <AddProductBtn onClick={handleAddProduct}>Add Product</AddProductBtn>
            <button onClick={handleSignOut} style={{ marginLeft: '1rem' }}>Sign Out</button>
          </div>
        </DashboardHeader>

        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <img src={`/images/${product.image || 'basket8.jpg'}`} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">₵{product.price}</p>
              <div className="actions">
                <button className="edit" onClick={() => handleEditProduct(product)}>Edit</button>
                <button className="delete" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </div>
            </ProductCard>
          ))}
        </ProductsGrid>

        {showModal && (
          <Modal onClick={() => setShowModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <h3>{editingProduct ? 'Edit Product' : 'Add Product'}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Product Description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
                <input
                  type="text"
                  placeholder="Image filename (e.g., basket6.jpg)"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
                <div className="actions">
                  <button type="submit" className="save">
                    {editingProduct ? 'Update' : 'Add'} Product
                  </button>
                  <button type="button" className="cancel" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </ModalContent>
          </Modal>
        )}
      </DashboardSection>
      <Footer />
    </AdminContainer>
  );
}