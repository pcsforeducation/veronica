/* eslint-disable @typescript-eslint/no-unused-vars */
"use strict";

import {EventEmitter} from "events";
import Envelope from "./envelope";
import {Message} from "./message";
import Robot from "./robot";

export default class Adapter extends EventEmitter {
  robot: Robot;
  adapterName: string;

  constructor(robot: Robot) {
    super();
    this.robot = robot;
  }
  send(envelope?: Envelope, ...strings) {}
  emote(envelope: Envelope, ...strings) {
    this.send(envelope, strings);
  }
  reply(envelope: Envelope, ...strings) {}
  topic(envelope: Envelope, ...strings) {}
  play(envelope: Envelope, ...strings) {}
  run() {}
  close() {}
  receive(message: Message) {
    this.robot.receive(message, this, null);
  }
}
