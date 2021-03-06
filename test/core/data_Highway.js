// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

(function () {
  var DATA = {
    'core.Highway.0': {
      input: {
        data: [-0.665722, -0.215115, 0.236105, -0.17614, -0.99507, 0.768064],
        shape: [6]
      },
      weights: [
        {
          data: [0.176262, 0.795427, 0.783061, 0.631675, -0.928221, 0.383515, -0.242638, 0.037022, 0.315903, -0.6123, -0.455367, 0.437212, 0.566007, 0.700655, 0.55049, -0.926671, -0.766613, 0.502561, -0.521564, -0.490388, 0.715251, 0.899558, 0.123374, -0.642439, 0.540504, -0.015238, 0.262506, 0.678996, -0.077921, -0.00412, 0.358822, 0.301572, -0.46241, -0.865351, 0.54289, -0.038032],
          shape: [6, 6]
        },
        {
          data: [-0.90255, -0.421781, 0.441933, -0.956768, -0.588154, -0.898453],
          shape: [6]
        },
        {
          data: [-0.583079, -0.036638, -0.158924, 0.718364, -0.657677, -0.322272, -0.458934, 0.382083, -0.559191, 0.623902, -0.978946, 0.122407, 0.627452, 0.490201, -0.621777, -0.987718, 0.544088, 0.915664, 0.403876, -0.404843, 0.535985, 0.376437, -0.225633, 0.230412, -0.14489, 0.168579, 0.405271, -0.77621, 0.84654, 0.977773, 0.354822, 0.59033, -0.941847, -0.644482, 0.749855, 0.489864],
          shape: [6, 6]
        },
        {
          data: [0.034596, 0.893925, 0.53092, -0.435208, -0.557909, 0.372444],
          shape: [6]
        }
      ],
      expected: {
        data: [-0.914347, -0.408456, -0.114281, -0.888056, -0.290505, -0.199544],
        shape: [6]
      }
    },
    'core.Highway.1': {
      input: {
        data: [-0.62992, -0.960677, 0.906504, 0.360902, -0.026824],
        shape: [5]
      },
      weights: [
        {
          data: [0.288287, -0.238503, 0.326096, -0.672699, 0.925216, -0.306676, 0.983502, -0.529884, 0.171389, -0.18662, -0.727531, 0.088273, 0.036353, 0.53371, 0.8677, -0.820593, -0.608457, 0.988387, -0.529639, -0.522027, 0.2582, 0.469905, 0.376689, -0.937739, 0.805028],
          shape: [5, 5]
        },
        {
          data: [-0.427892, 0.916211, 0.540626, 0.97374, -0.583669],
          shape: [5]
        },
        {
          data: [0.717779, -0.254578, 0.110258, 0.911313, 0.473339, 0.63241, -0.797827, 0.856976, 0.218218, 0.193107, -0.816432, -0.309628, 0.325505, -0.116573, 0.102976, 0.407425, 0.178802, -0.900134, 0.123584, 0.532717, 0.821817, -0.81418, 0.805043, -0.078079, -0.095963],
          shape: [5, 5]
        },
        {
          data: [-0.50298, -0.100049, -0.178118, -0.479401, 0.740791],
          shape: [5]
        }
      ],
      expected: {
        data: [-0.652907, -0.353259, 0.890362, 0.477292, -0.256096],
        shape: [5]
      }
    },
    'core.Highway.2': {
      input: {
        data: [0.409965, -0.370646, 0.490565, -0.203574],
        shape: [4]
      },
      weights: [
        {
          data: [-0.184626, -0.889268, 0.57707, -0.42539, -0.099299, -0.392175, 0.052799, 0.247624, 0.553551, 0.372483, 0.961878, 0.201632, 0.627937, 0.41729, -0.944931, 0.808534],
          shape: [4, 4]
        },
        {
          data: [-0.498153, -0.907808, 0.353632, -0.913061, -0.767153, 0.207731, -0.618139, 0.337031, 0.834896, -0.16244, -0.33548, -0.433933, -0.627435, -0.365779, -0.037663, -0.860959],
          shape: [4, 4]
        }
      ],
      expected: {
        data: [0.482075, -0.04199, 0.593448, 0.031503],
        shape: [4]
      }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
