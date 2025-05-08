
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Label } from '@/components/ui/label.jsx';
import { useCart } from '@/hooks/useCart.jsx';
import { useToast } from '@/components/ui/use-toast.js';
import { PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedOption, setSelectedOption] = useState(item.options && item.options.length > 0 ? item.options[0].value : null);
  const [checkboxOptionSelected, setCheckboxOptionSelected] = useState(false);

  const handleAddToCart = () => {
    addToCart(item, 1, selectedOption, item.hasCheckboxOption ? checkboxOptionSelected : null);
    toast({
      title: "Adicionado ao Carrinho!",
      description: `${item.name} foi adicionado ao seu pedido.`,
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col bg-varanda-brown-light border-varanda-beige-dark hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-0">
          <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <CardTitle className="text-xl rustic-title text-primary">{item.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4 pt-0">
          {item.description && <CardDescription className="text-sm text-varanda-beige mb-2">{item.description}</CardDescription>}
          <p className="text-lg font-semibold text-varanda-gold">R$ {item.price.toFixed(2)}</p>
          
          {item.optionsTitle && item.options && (
            <div className="mt-3">
              <Label className="text-sm font-medium text-varanda-beige">{item.optionsTitle}</Label>
              <RadioGroup defaultValue={selectedOption} onValueChange={setSelectedOption} className="mt-1 space-y-1">
                {item.options.map(option => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`${item.id}-${option.value}`} />
                    <Label htmlFor={`${item.id}-${option.value}`} className="text-sm text-varanda-beige font-normal">{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {item.hasCheckboxOption && item.checkboxLabel && (
            <div className="mt-3 flex items-center space-x-2">
              <Checkbox 
                id={`${item.id}-checkbox`} 
                checked={checkboxOptionSelected}
                onCheckedChange={setCheckboxOptionSelected}
              />
              <Label htmlFor={`${item.id}-checkbox`} className="text-sm text-varanda-beige font-normal">{item.checkboxLabel}</Label>
            </div>
          )}

        </CardContent>
        <CardFooter className="p-4">
          <Button onClick={handleAddToCart} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <PlusCircle className="mr-2 h-4 w-4" /> Adicionar
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default MenuItemCard;
