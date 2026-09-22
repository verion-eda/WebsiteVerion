# Verion logo — vision

## The idea

The mark is a **Möbius band built from signal lines**, like the parallel traces of a bus on a chip. The band twists back into itself with no start or end. That is the **infinite learning loop**: signals go through the design, results feed back, and each pass makes the system smarter. The single surface stands for the **intelligence** in Verion. Simulation and learning are one continuous process, not separate steps.

- **Bus lines** — hardware roots: RTL, wires, signals moving in parallel.
- **Möbius twist** — the feedback loop; inside and outside are the same surface.
- **Asymmetry** — one lobe is larger and the half-twist sits on one side. The loop reads as moving and evolving, not static.
- **Highlighted signal trace** — one trace is lit in the accent cyan. It is the signal being followed around the loop. Later it can become an animated pulse.

##

Organic slow movement, warping of structure; Signals - glows - wizzing along its path.

## Concepts in this folder

These are explorations, not a final logo. Each has a `-dark` and a `-light` SVG (512×512).

| Folder          | Direction                                                   |
| --------------- | ----------------------------------------------------------- |
| `1a-ribbon`     | Solid ribbon, baseline Möbius form                          |
| `1b-bus`        | Band split into bus traces                                  |
| `1c-sampling`   | Sampled / discretised surface                               |
| `1d-edge`       | Edges only                                                  |
| `2a-bus-3`      | Three bold traces, signal in the middle                     |
| `2b-bus-fine`   | Eight fine traces, uneven pitch                             |
| `2c-bus-graded` | Bus with colour grading across traces                       |
| `2e-edge-lit`   | Glowing edges, Tron-style (static stand-in for animation)   |
| `2f-pulse`      | Signal pulse along the band (static stand-in for animation) |

The bus family (1b, 2a–2c) and the edge-lit family (2e, 2f) are currently the most promising. A planned next step is animating glowing splines moving along the band.

## Geometry

All marks come from one parametric surface (u ∈ [0, 2π), v ∈ [−1, 1]), so the same shape can drive animation or a 3D export:

- Centerline radius `R(u) = 1 + a·cos(u)`, a = 0.16
- Twist `θ(u) = u/2 − (b/2)·sin(u)`, b = 0.7
- Width `w(u) = wMin + (wMax − wMin)·(1 − cos(u − 0.9))/2`
- Point `r = R + v·(w/2)·cos θ`, `(x, y, z) = (r cos u, r sin u, v·(w/2)·sin θ)`

## Palette

Taken from the site (`tailwind.config.mjs`): background `#050507`, ink `#e0dde6`, signal `#00d4ff` / `#00e5ff`, and blue `#0088ff` (the signal colour on light backgrounds). Wordmark: JetBrains Mono 600, lowercase "verion".

Source: Claude Design project "EDA Logo Directions". These files are deliberately kept out of `public/` and are not used by the site yet.
