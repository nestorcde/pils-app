import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../app/navigation/types';
import { Module } from '../../../shared/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const useModules = () => {
  const navigation = useNavigation<NavigationProp>();

  const modules: Module[] = [
    {
      id: 'invoice',
      title: 'Facturación',
      description: 'Gestiona tus facturas y documentos comerciales',
      icon: '📄',
      onPress: () => {
        // navigation.navigate('Invoice');
        console.log('Navegando a Facturación...');
      },
    },
    {
      id: 'inventory',
      title: 'Inventario',
      description: 'Control de productos, stock y almacén',
      icon: '📦',
      onPress: () => {
        // navigation.navigate('Inventory');
        console.log('Navegando a Inventario...');
      },
    },
    {
      id: 'reports',
      title: 'Reportes',
      description: 'Análisis y reportes del negocio',
      icon: '📊',
      onPress: () => {
        // navigation.navigate('Reports');
        console.log('Navegando a Reportes...');
      },
    },
    {
      id: 'customers',
      title: 'Clientes',
      description: 'Gestión de clientes y proveedores',
      icon: '👥',
      onPress: () => {
        console.log('Navegando a Clientes...');
      },
    },
    {
      id: 'settings',
      title: 'Configuración',
      description: 'Ajustes y configuración del sistema',
      icon: '⚙️',
      onPress: () => {
        console.log('Navegando a Configuración...');
      },
    },
  ];

  return { modules };
};