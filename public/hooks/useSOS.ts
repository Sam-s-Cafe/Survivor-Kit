
import { useState, useEffect, useCallback } from 'react';
import { useGeolocation } from './useGeolocation';
import { SOSLocation } from '../types';

const SOS_STORAGE_KEY = 'survivor-kit-sos-location';

export const useSOS = () => {
  const [isSOSActive, setIsSOSActive] = useState<boolean>(false);
  const [sosLocation, setSosLocation] = useState<SOSLocation | null>(null);
  const { position, error: geoError, loading: geoLoading, requestLocation } = useGeolocation();

  useEffect(() => {
    try {
      const storedSOS = localStorage.getItem(SOS_STORAGE_KEY);
      if (storedSOS) {
        const parsedSOS: SOSLocation = JSON.parse(storedSOS);
        setSosLocation(parsedSOS);
        setIsSOSActive(true);
      }
    } catch (e) {
      console.error("Failed to parse SOS data from localStorage", e);
    }
  }, []);
  
  const activateSOS = useCallback(() => {
    requestLocation();
  }, [requestLocation]);

  useEffect(() => {
    if (position) {
      const newSOSLocation: SOSLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(SOS_STORAGE_KEY, JSON.stringify(newSOSLocation));
      setSosLocation(newSOSLocation);
      setIsSOSActive(true);
    }
  }, [position]);

  const deactivateSOS = useCallback(() => {
    localStorage.removeItem(SOS_STORAGE_KEY);
    setIsSOSActive(false);
    setSosLocation(null);
  }, []);

  return { isSOSActive, sosLocation, activateSOS, deactivateSOS, geoLoading, geoError };
};