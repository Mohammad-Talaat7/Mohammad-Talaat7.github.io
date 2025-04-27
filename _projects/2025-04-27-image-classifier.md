---
title: "Image Classification with CNN"
date: 2025-04-27
categories: [Computer Vision, Deep Learning]
tags: [Python, TensorFlow, CNN]
github: yourusername/image-classifier-project
demo: https://your-demo-link.com
---

## Overview
Brief description of the problem and your solution.

## Methodology
- Architecture used (e.g., ResNet50)
- Training details (dataset, epochs, etc.)
- Evaluation metrics

## Results
![Accuracy Plot](/assets/images/project1-accuracy.png)

> Key findings and performance metrics

## Code Implementation
```python
# Sample code snippet
model = Sequential([
    Conv2D(32, (3,3), activation='relu', input_shape=(224,224,3)),
    MaxPooling2D((2,2)),
    ...
])
