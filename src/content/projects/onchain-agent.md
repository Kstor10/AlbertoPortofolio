---
order: 2
year: "2026"
status: prototype
cover: /images/projects/onchain-agent/onchain-agent-05-arena-comparativa.webp
accent: cyan
es:
  title: Onchain Agent
  eyebrow: Reinforcement learning · crypto research
  summary: "Proyecto de reinforcement learning (RL) para entrenar, evaluar y comparar tres agentes de trading con Gymnasium y RecurrentPPO."
  problem: "Una estrategia de trading basada en ML no se puede valorar por una gráfica aislada: necesita un entorno reproducible, una recompensa explícita y evaluación comparable."
  solution:
    - "Entorno Gymnasium con estados, acciones, costes y límites de riesgo definidos."
    - "Reward function documentada y entrenamiento RecurrentPPO con checkpoints."
    - "Tres políticas: Alpha Momentum, Beta Mean Reversion y Gamma Sniper."
    - "Arena offline, replay determinista, telemetría TensorBoard y consola de señales BUY/SELL."
  result: "Una demostración técnica reproducible del ciclo ML completo —entorno, entrenamiento, evaluación y observabilidad— sin conectar wallet, exchange ni órdenes reales."
  stack:
    - Python
    - Gymnasium
    - RecurrentPPO
    - Stable-Baselines3
    - PyTorch
    - TensorBoard
    - FastAPI
    - Chart.js
  role:
    - Diseño del experimento y de las tres estrategias
    - Modelado del entorno y la recompensa
    - Entrenamiento, evaluación y replay offline
    - Recuperación del dashboard y comunicación de límites
  gallery:
    - src: /images/projects/onchain-agent/onchain-agent-05-arena-comparativa.webp
      alt: "Arena comparativa de los agentes Alpha, Beta y Gamma"
      caption: "Una arena común para comparar tres políticas distintas."
    - src: /images/projects/onchain-agent/onchain-agent-01-pipeline.webp
      alt: "Diagrama del pipeline de datos, Gymnasium, política recurrente y evaluación"
      caption: "Pipeline reproducible desde los datos hasta la evaluación."
    - src: /images/projects/onchain-agent/onchain-agent-02-reward-ppo.webp
      alt: "Panel que explica la función de recompensa y la configuración PPO"
      caption: "La recompensa hace explícitos objetivos, costes y penalizaciones."
    - src: /images/projects/onchain-agent/onchain-agent-11-training-replay.webp
      alt: "Curvas de entrenamiento reproducidas desde registros de TensorBoard"
      caption: "Telemetría histórica de los tres entrenamientos."
    - src: /images/projects/onchain-agent/onchain-agent-13-beta-neural-internals.webp
      alt: "Métricas internas de la política Beta y distribución de señales"
      caption: "Entropía, value loss y señales BUY/HOLD/SELL de Beta."
    - src: /images/projects/onchain-agent/onchain-agent-09-terminal-trades.webp
      alt: "Terminal con compras y ventas del replay determinista de Gamma"
      caption: "La consola permite seguir cada decisión del replay."
    - src: /images/projects/onchain-agent/onchain-agent-10-night-mode.webp
      alt: "Night Mode preparado para entrenar Alpha, Beta y Gamma"
      caption: "Configuración reproducible de los tres agentes; captura en dry run."
    - src: /images/projects/onchain-agent/onchain-agent-04-limites.webp
      alt: "Panel de límites que separa lo demostrado de lo no afirmado"
      caption: "Los límites del prototipo forman parte del resultado."
en:
  title: Onchain Agent
  eyebrow: Reinforcement learning · crypto research
  summary: "A reinforcement learning (RL) project for training, evaluating and comparing three trading agents with Gymnasium and RecurrentPPO."
  problem: "An ML trading strategy cannot be assessed from a single chart: it needs a reproducible environment, an explicit reward and comparable evaluation."
  solution:
    - "A Gymnasium environment with defined states, actions, costs and risk limits."
    - "A documented reward function and RecurrentPPO training with checkpoints."
    - "Three policies: Alpha Momentum, Beta Mean Reversion and Gamma Sniper."
    - "An offline arena, deterministic replay, TensorBoard telemetry and BUY/SELL signal console."
  result: "A reproducible technical demo of the full ML loop —environment, training, evaluation and observability— without connecting a wallet, exchange or real orders."
  stack:
    - Python
    - Gymnasium
    - RecurrentPPO
    - Stable-Baselines3
    - PyTorch
    - TensorBoard
    - FastAPI
    - Chart.js
  role:
    - Experiment and strategy design
    - Environment and reward modelling
    - Offline training, evaluation and replay
    - Dashboard recovery and honest limits communication
  gallery:
    - src: /images/projects/onchain-agent/onchain-agent-05-arena-comparativa.webp
      alt: "Arena comparing the Alpha, Beta and Gamma agents"
      caption: "One shared arena for comparing three different policies."
    - src: /images/projects/onchain-agent/onchain-agent-01-pipeline.webp
      alt: "Pipeline diagram covering data, Gymnasium, recurrent policy and evaluation"
      caption: "A reproducible pipeline from data to evaluation."
    - src: /images/projects/onchain-agent/onchain-agent-02-reward-ppo.webp
      alt: "Panel explaining the reward function and PPO configuration"
      caption: "The reward makes goals, costs and penalties explicit."
    - src: /images/projects/onchain-agent/onchain-agent-11-training-replay.webp
      alt: "Training curves replayed from TensorBoard logs"
      caption: "Historical telemetry from all three training runs."
    - src: /images/projects/onchain-agent/onchain-agent-13-beta-neural-internals.webp
      alt: "Beta policy internals and signal distribution"
      caption: "Entropy, value loss and Beta's BUY/HOLD/SELL signals."
    - src: /images/projects/onchain-agent/onchain-agent-09-terminal-trades.webp
      alt: "Terminal showing buys and sells from Gamma's deterministic replay"
      caption: "The console makes every replay decision traceable."
    - src: /images/projects/onchain-agent/onchain-agent-10-night-mode.webp
      alt: "Night Mode prepared for Alpha, Beta and Gamma training"
      caption: "Reproducible three-agent setup, captured as a dry run."
    - src: /images/projects/onchain-agent/onchain-agent-04-limites.webp
      alt: "Limitations panel separating demonstrated and unclaimed behaviour"
      caption: "The prototype's limits are part of the result."
---

Onchain Agent presenta investigación de ML con evidencias reproducibles y sin confundir una demo offline con trading real.
