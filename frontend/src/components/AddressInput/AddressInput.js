/**
 * Componente funcional para entrada de endereço com sugestões de preenchimento automático do Google Maps.
 * Props:
 *   - setRua: função para definir a rua do endereço
 *   - setNumero: função para definir o número do endereço
 *   - setBairro: função para definir o bairro do endereço
 *   - setCidade: função para definir a cidade do endereço
 *   - setEstado: função para definir o estado do endereço
 */
import React, { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";

// Chave de API do Google Maps
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const AddressInput = ({ setRua, setNumero, setBairro, setCidade, setEstado }) => {
  // Estado para armazenar o endereço selecionado
  const [selectedAddress, setSelectedAddress] = useState('');

  // Função para lidar com a seleção de um lugar pelo usuário
  const handlePlaceSelect = (place) => {
    setSelectedAddress(place.formatted_address);
    setRua(getAddressComponent(place, 'route')); // Define a rua com base no lugar selecionado
    setNumero(getAddressComponent(place, 'street_number')); // Define o número com base no lugar selecionado
    setBairro(getAddressComponent(place, 'sublocality_level_1')); // Define o bairro com base no lugar selecionado
    setCidade(getAddressComponent(place, 'administrative_area_level_2')); // Define a cidade com base no lugar selecionado
    setEstado(getAddressComponent(place, 'administrative_area_level_1')); // Define o estado com base no lugar selecionado
  };

  // Função para obter o componente de endereço com base no tipo
  const getAddressComponent = (place, type) => {
    let addressComponent = '';
    place.address_components.forEach(component => {
      component.types.forEach(typeName => {
        if (typeName === type) {
          addressComponent = component.long_name;
        }
      });
    });
    return addressComponent;
  };

  // Efeito para carregar e inicializar o Autocomplete do Google Maps
  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });

    loader.load().then((google) => {
      const autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete-input'), {
        // Opções do Autocomplete
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        handlePlaceSelect(place); // Lidar com a seleção de um lugar quando o usuário seleciona um lugar
      });
    });
  }, []);

  return (
    <input
      id="autocomplete-input"
      type="text"
      placeholder="Digite o endereço..."
      value={selectedAddress}
      onChange={(e) => setSelectedAddress(e.target.value)}
      className="form-control"
    />
  );
};

export default AddressInput;