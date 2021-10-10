import { CoinWarWaitProps } from ".";

export const SpeedModes = {
  slow: { x: 10, y: 1 },
  normal: { x: 20, y: 2 },
  fast: { x: 50, y: 5 },
  factory: { x: 5, y: 10 },
};

class Bubble {
  constructor(
    public x: number,
    public y: number,
    public color = "black",
    public speed = SpeedModes["normal"],
    public w = 20
  ) {}
  findNextStep() {
    if (this.y === 0 && this.x < 200) {
      this.x += this.speed.x;
    } else if (this.x === 200 && this.y < 200) {
      this.y += this.speed.y;
    } else if (this.y === 200 && this.x > 1) {
      this.x -= this.speed.x;
    } else {
      this.y -= this.speed.y;
    }
  }
}

export class CoinWarWaitLogic {
  private animation: number;
  private ctx: CanvasRenderingContext2D;
  private bubbles: Bubble[] = [];
  private railsColor = "black";
  constructor(private canvas: HTMLCanvasElement, params: CoinWarWaitProps) {
    const ctx = this.canvas.getContext("2d");
    if (!ctx) throw new Error("could not get canvas 2d context");
    this.ctx = ctx;
    this.setParams(params);
    this.animation = requestAnimationFrame(() => this.draw());
  }
  setParams({ ballsColor, railsColor, modes = "normal" }: CoinWarWaitProps) {
    this.railsColor = railsColor || "black";
    const speedMode = SpeedModes[modes];
    this.bubbles = [
      new Bubble(0, 0, ballsColor, speedMode),
      new Bubble(100, 0, ballsColor, speedMode),
      new Bubble(200, 0, ballsColor, speedMode),
      new Bubble(200, 200, ballsColor, speedMode),
      new Bubble(100, 200, ballsColor, speedMode),
      new Bubble(0, 200, ballsColor, speedMode),
    ];
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeStyle = this.railsColor;
    this.ctx.strokeRect(50, 50, 200, 200);

    for (let i = 0; i < this.bubbles.length; i++) {
      this.bubbles[i].findNextStep();
      this.ctx.fillStyle = this.bubbles[i].color;
      this.ctx.beginPath();
      this.ctx.arc(
        50 + this.bubbles[i].x,
        50 + this.bubbles[i].y,
        this.bubbles[i].w,
        0,
        Math.PI * 2
      );
      this.ctx.fill();
    }
    this.animation = requestAnimationFrame(() => this.draw());
  }
  cleanup() {
    cancelAnimationFrame(this.animation);
  }
}
