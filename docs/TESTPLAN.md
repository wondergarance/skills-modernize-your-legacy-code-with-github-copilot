# Plan de test – Application COBOL Gestion des Comptes Étudiants

Ce plan de test couvre la logique métier actuelle de l’application COBOL. Il pourra servir de base pour la validation avec les parties prenantes et la migration vers Node.js.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|--------------------|----------|
| TC01 | Consultation du solde initial | Compte étudiant existant | 1. Lancer l’application; 2. Sélectionner "View Balance" | Le solde affiché correspond au solde initial du compte | | | |
| TC02 | Créditer le compte étudiant | Compte étudiant existant | 1. Lancer l’application; 2. Sélectionner "Credit Account"; 3. Saisir un montant valide | Le solde est augmenté du montant crédité | | | |
| TC03 | Débiter le compte étudiant (solde suffisant) | Compte étudiant avec solde suffisant | 1. Lancer l’application; 2. Sélectionner "Debit Account"; 3. Saisir un montant inférieur ou égal au solde | Le solde est diminué du montant débité | | | |
| TC04 | Débiter le compte étudiant (solde insuffisant) | Compte étudiant avec solde insuffisant | 1. Lancer l’application; 2. Sélectionner "Debit Account"; 3. Saisir un montant supérieur au solde | Message d’erreur : "Retrait impossible, solde insuffisant"; Le solde reste inchangé | | | |
| TC05 | Affichage du menu principal | Application lancée | 1. Lancer l’application | Le menu principal s’affiche avec les 4 options | | | |
| TC06 | Quitter l’application | Application lancée | 1. Sélectionner "Exit" | L’application se termine avec un message d’au revoir | | | |
| TC07 | Saisie d’une option invalide | Application lancée | 1. Saisir une option non prévue (ex : 5, a, etc.) | Message d’erreur ou demande de ressaisie | | | |
| TC08 | Créditer avec un montant négatif ou nul | Compte étudiant existant | 1. Sélectionner "Credit Account"; 2. Saisir un montant négatif ou nul | Message d’erreur : "Montant invalide"; Le solde reste inchangé | | | |
| TC09 | Débiter avec un montant négatif ou nul | Compte étudiant existant | 1. Sélectionner "Debit Account"; 2. Saisir un montant négatif ou nul | Message d’erreur : "Montant invalide"; Le solde reste inchangé | | | |

> Ce plan pourra être enrichi lors de la transformation Node.js pour couvrir les cas d’intégration et les scénarios multi-utilisateurs.
