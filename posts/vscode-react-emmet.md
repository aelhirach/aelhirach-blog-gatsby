---
title: 'Using Emmet with React in Visual Studio Code - 2019'
tags: ["react", "vscode"]
published: true
date: '2019-03-20'
---

Bienvenu sur mon blog,
Notre cours d'aujourd'hui consiste à expliquer le système de fichiers NTFS.

Partie 1:
Dans un premier temps, nous allons aborder le principe de fonctionnement d'un système de fichier ainsi que la structure d'un disque dur. Ensuite, nous allons voir la structure interne d'NTFS en analysant les différents méta-fichiers système et les zones d'une partition NTFS.

<iframe width="560" height="315" src="https://youtu.be/tgvthGfN5Y4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Partie 2:
Dans un deuxième temps, nous allons expliquer en détails la structure interne d'une entrée MFT et ses différents attributs et notamment l'attribut $DATA. En effet, c'est dans cet attribut que l'on stocke les données d'un fichier. (Cette partie sera bientôt publiée)


``` jsx
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component {
  render() {
    return (
        <p className="App-intro">
          I'm a childish component
        </p>
    );
  }
}

export default Child;
```
