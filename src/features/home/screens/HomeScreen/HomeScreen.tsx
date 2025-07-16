import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { ModuleCard } from '../../components/ModuleCard';
import { useModules } from '../../hooks/useModules';
import { styles } from './HomeScreen.styles';

export const HomeScreen: React.FC = () => {
  const { modules } = useModules();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PILS</Text>
        <Text style={styles.subtitle}>Sistema de Gestión Empresarial</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeText}>¡Bienvenido!</Text>
          <Text style={styles.welcomeDescription}>
            Selecciona un módulo para comenzar a gestionar tu negocio de manera eficiente.
          </Text>
        </View>

        <View style={styles.modulesSection}>
          <Text style={styles.sectionTitle}>Módulos Disponibles</Text>
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              title={module.title}
              description={module.description}
              icon={module.icon}
              onPress={module.onPress}
              disabled={module.disabled}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};