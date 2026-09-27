---
title: "Earth-Trained Satellite NIDS"
description: "Studio del trasferimento di modelli di Network Intrusion Detection addestrati su traffico terrestre verso scenari di rete satellitare."

date: 2026-09-01
period: "2025–2026"

tags:
  - Cybersecurity
  - Machine Learning
  - NIDS
  - Satellite Networks
  - Python

github: "https://github.com/marchesinia187179/earth-trained-satellite-ids"

image: "/images/projects/earth-trained-satellite-nids.png"
imageAlt: "Schema del trasferimento di un Network Intrusion Detection System dal dominio terrestre al dominio satellitare"

status: "completed"
featured: true
draft: false
---

Il progetto studia l'applicabilità di modelli di **Network Intrusion Detection System (NIDS)** addestrati su traffico di rete terrestre a scenari caratterizzati da traffico satellitare.

L'obiettivo è analizzare il problema del trasferimento tra domini differenti, mantenendo una rappresentazione coerente delle caratteristiche di rete utilizzate dai modelli di Machine Learning.

## Problema

I sistemi di intrusion detection basati su Machine Learning vengono generalmente addestrati e valutati utilizzando dataset appartenenti allo stesso dominio.

L'applicazione di un modello addestrato su traffico terrestre a un contesto satellitare introduce invece un problema di **domain transfer**, poiché i dataset possono differire per struttura, feature disponibili, unità di misura e distribuzioni statistiche.

Il progetto affronta quindi uno scenario nel quale il modello viene addestrato nel dominio terrestre e successivamente valutato nel dominio satellitare.

## Metodologia

La metodologia è organizzata attorno alla costruzione di uno **spazio di feature condiviso** tra dominio sorgente e dominio target.

Il dominio sorgente è rappresentato dal dataset **UNSW-NB15**, mentre il dominio target comprende dataset relativi allo scenario satellitare.

Le feature originarie vengono trasformate mediante un operatore di mapping che esegue:

- allineamento semantico delle caratteristiche;
- conversione delle unità di misura;
- costruzione di feature derivate;
- normalizzazione dei dati.

L'obiettivo è ottenere una rappresentazione compatibile che permetta di utilizzare gli stessi classificatori nei differenti domini.

## Modelli

La pipeline sperimentale utilizza differenti classificatori supervisionati:

- Random Forest;
- Decision Tree;
- Histogram-based Gradient Boosting.

L'addestramento viene orchestrato attraverso una pipeline Python che gestisce la preparazione dei dataset, l'addestramento dei modelli, la valutazione e la persistenza degli artefatti sperimentali.

## Valutazione

La valutazione considera metriche di classificazione quali:

- F1-Score;
- Precision;
- Recall.

La pipeline produce inoltre artefatti utili all'analisi dei modelli e del loro comportamento nei differenti scenari sperimentali.

## Tecnologie

Il progetto è stato sviluppato principalmente utilizzando:

- Python;
- pandas;
- scikit-learn;
- joblib;
- SHAP;
- LaTeX.

## Contesto

Il progetto è stato sviluppato nell'ambito della tesi di Laurea Triennale in Ingegneria Informatica.