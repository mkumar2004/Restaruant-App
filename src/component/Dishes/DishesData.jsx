import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { urlFor } from '../../Services/Sanity';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

const DishesData = ({ Restaurants }) => {
  const router = useRouter();
  const [isPressed, setPressed] = useState({});
  const [cartItems, setCartItems] = useState({});

  const togglePress = (dishId) => {
    setPressed((prev) => ({
      ...prev,
      [dishId]: !prev[dishId],
    }));
  };

  const increaseQuantity = (dish) => {
    setCartItems((prev) => ({
      ...prev,
      [dish._id]: {
        ...dish,
        quantity: (prev[dish._id]?.quantity || 0) + 1,
      },
    }));
  };

  const decreaseQuantity = (dishId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[dishId]?.quantity > 1) {
        updatedCart[dishId].quantity -= 1;
      } else {
        delete updatedCart[dishId];
      }
      return updatedCart;
    });
  };

  // Calculate total price of all items in the cart
  const calculateTotalPrice = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const item = cartItems[itemId];
      total += item.price * item.quantity;
    }
    return total.toFixed(2);  // Format to 2 decimal places
  };
  
  const totalPrice  = calculateTotalPrice();
  
  return (
    <ScrollView>
      {Restaurants.dishes.map((dish, index) => {
        const dishId = dish._id || `dish-${index}`;
        const isExpanded = isPressed[dishId] || false;
        const quantity = cartItems[dishId]?.quantity || 0;

        return (
          <View key={dishId} style={styles.card}>
            <TouchableOpacity onPress={() => togglePress(dishId)}>
              <View style={styles.row}>
                <View>
                  <Text style={styles.name}>{dish.name}</Text>
                  <Text style={styles.price}>Price:  ₹{dish.price}</Text>
                </View>

                {dish.image && (
                  <Image
                    source={{ uri: urlFor(dish.image).url() }}
                    style={styles.image}
                    resizeMode="cover"
                  />
                )}
              </View>
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.controls}>
                <TouchableOpacity onPress={() => decreaseQuantity(dishId)}>
                  <AntDesign name="minuscircle" size={35} color={quantity > 0 ? "red" : "grey"} />
                </TouchableOpacity>

                <Text style={styles.quantity}>{quantity}</Text>

                <TouchableOpacity onPress={() => increaseQuantity(dish)}>
                  <AntDesign name="pluscircle" size={35} color="red" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
      })}

      {/* Display Added Items */}
      {Object.keys(cartItems).length > 0 && (
        <View style={styles.cartSection}>
          <Text style={styles.cartTitle}>🛒 Your Order:</Text>
          {Object.values(cartItems).map((item) => (
            <View key={item._id}>
              <View>
                
              </View>
              <View style={styles.cartItem}>
                <Image source={{ uri: urlFor(item.image).url() }} style={styles.cartImage} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>Price:  ₹{item.price}</Text>
                  <Text style={styles.quantity}>Qty: {item.quantity}</Text>
                  <Text style={styles.totalPrice}>Total:  ₹{(item.price * item.quantity).toFixed(2)}</Text>
                </View>
              </View>
            </View>

          ))}

          {/* Display the overall price */}
          <View style={styles.totalContainer} >
                <Text style={styles.totalText}>Total Price: ₹{calculateTotalPrice()}</Text>
                <TouchableOpacity style={styles.checkoutButton}
                        onPress={() => {
                          router.replace({
                            pathname: 'Profile',
                            params: {
                            
                              datalist:Restaurants._id,
                              Restaurants:Restaurants
                      
                            }
                          })
                        }}
                
                >
                  <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>

              </View>

          

        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    color: '#002244',
  },
  price: {
    fontSize: 15,
    color: 'grey',
  },
  controls: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartSection: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  cartTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkoutButton: {
    marginTop: 15,
    backgroundColor: '#FF6347',  // Tomato color
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DishesData;
