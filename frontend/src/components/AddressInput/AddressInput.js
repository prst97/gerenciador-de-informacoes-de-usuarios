import React, { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY = 'AIzaSyC2WQvmrxktLVwHsPCYgV0wyEkVCiSfVDY';

const AddressInput = ({ setRua, setNumero, setBairro, setCidade, setEstado }) => {
  const [selectedAddress, setSelectedAddress] = useState('');

  const handlePlaceSelect = (place) => {
    setSelectedAddress(place.formatted_address);
    setRua(getAddressComponent(place, 'route'));
    setNumero(getAddressComponent(place, 'street_number'));
    setBairro(getAddressComponent(place, 'sublocality_level_1'));
    setCidade(getAddressComponent(place, 'administrative_area_level_2'));
    setEstado(getAddressComponent(place, 'administrative_area_level_1'));
  };

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
        handlePlaceSelect(place);
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
