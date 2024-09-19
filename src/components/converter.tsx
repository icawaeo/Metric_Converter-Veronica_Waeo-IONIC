import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton } from '@ionic/react';

const Converter = () => {
  const [value, setValue] = useState(0);
  const [unit, setUnit] = useState('m');
  const [convertedValue, setConvertedValue] = useState(0);

  const convertValue = () => {
    let result = value;

    switch (unit) {
      case 'm':
        result = value; // Meter
        break;
      case 'km':
        result = value / 1000; // Kilometer
        break;
      case 'cm':
        result = value * 100; // Centimeter
        break;
      case 'kg':
        result = value; // Kilogram
        break;
      case 'g':
        result = value * 1000; // Gram
        break;
      case 's':
        result = value; // Second
        break;
      case 'ms':
        result = value * 1000; // Millisecond
        break;
      default:
        break;
    }

    setConvertedValue(result);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Converter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Input Value</IonLabel>
          <IonInput
            type="number"
            value={value}
            onIonChange={e => setValue(parseFloat(e.detail.value!))}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Unit</IonLabel>
          <IonSelect value={unit} onIonChange={e => setUnit(e.detail.value)}>
            <IonSelectOption value="m">Meter (m)</IonSelectOption>
            <IonSelectOption value="km">Kilometer (km)</IonSelectOption>
            <IonSelectOption value="cm">Centimeter (cm)</IonSelectOption>
            <IonSelectOption value="kg">Kilogram (kg)</IonSelectOption>
            <IonSelectOption value="g">Gram (g)</IonSelectOption>
            <IonSelectOption value="s">Second (s)</IonSelectOption>
            <IonSelectOption value="ms">Millisecond (ms)</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonButton expand="block" onClick={convertValue}>Convert</IonButton>

        <IonItem>
          <IonLabel>Converted Value: {convertedValue}</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Converter;
