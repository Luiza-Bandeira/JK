
import React, { useState, useEffect, useRef } from 'react';
import { CartProvider } from '@/hooks/useCart.jsx';
import Header from '@/components/Header.jsx';
import CategorySection from '@/components/CategorySection.jsx';
import Cart from '@/components/Cart.jsx';
import OrderModal from '@/components/OrderModal.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs.jsx"
import { menuData } from '@/data/menuData.js';
import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Sandwich as Hamburger, Drumstick, Cookie, Beer } from 'lucide-react';

const categoryIcons = {
  "HAMBÚRGUERES": <Hamburger className="mr-2 h-5 w-5" />,
  "PORÇÃO CARNES": <Drumstick className="mr-2 h-5 w-5" />,
  "PORÇÃO BATATAS": <Cookie className="mr-2 h-5 w-5" />,
  "BEBIDAS": <Beer className="mr-2 h-5 w-5" />,
};

const HEADER_WITH_TABS_HEIGHT = 140; 

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(menuData.categories[0].id);
  const mainContentRef = useRef(null);


  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    setIsCartOpen(false); 
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };
  
  useEffect(() => {
    if (isCartOpen || isOrderModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden'; // For html element
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto'; // For html element
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto'; // For html element
    };
  }, [isCartOpen, isOrderModalOpen]);

  return (
    <CartProvider>
      <div className={`min-h-screen flex flex-col bg-background ${isCartOpen || isOrderModalOpen ? 'overflow-hidden fixed inset-0' : ''}`}>
        <Header onCartClick={handleCartClick}>
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList 
              className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-varanda-brown-dark p-1 rounded-lg"
            >
            {menuData.categories.map(category => (
                <TabsTrigger 
                key={category.id} 
                value={category.id} 
                className="rustic-title text-sm sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg text-varanda-beige hover:bg-varanda-gold-light/20 transition-all duration-200 ease-in-out flex items-center justify-center py-2.5"
                >
                {categoryIcons[category.name] || <UtensilsCrossed className="mr-2 h-5 w-5" />}
                {category.name}
                </TabsTrigger>
            ))}
            </TabsList>
          </Tabs>
        </Header>
        
        <main ref={mainContentRef} className="flex-grow container mx-auto px-4 py-8" style={{ paddingTop: '1rem' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 pt-4" 
          >
            <UtensilsCrossed className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold rustic-title text-primary">Nosso Cardápio</h1>
            <p className="text-lg text-varanda-beige mt-2">Delícias artesanais feitas com carinho!</p>
          </motion.div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {menuData.categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                <CategorySection category={category} />
              </TabsContent>
            ))}
          </Tabs>
        </main>

        <footer className="bg-varanda-brown-dark text-center p-6 text-varanda-beige-dark mt-auto">
          <p>&copy; {new Date().getFullYear()} VARANDA JK. Todos os direitos reservados.</p>
          <p className="text-sm">Cardápio digital por Hostinger Horizons</p>
        </footer>
        
        <AnimatePresence>
          {isCartOpen && <Cart isOpen={isCartOpen} onClose={handleCloseCart} onCheckout={handleCheckout} />}
        </AnimatePresence>
        
        <OrderModal isOpen={isOrderModalOpen} onClose={handleCloseOrderModal} />
        <Toaster />
      </div>
    </CartProvider>
  );
}

export default App;
