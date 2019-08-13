import { Device, Endpoint } from "./model";
import { KeyValue } from "./tstype";



enum Events {
    message = "message",
    adapterDisconnected = "adapterDisconnected",
    deviceJoined = "deviceJoined",
    deviceInterview = "deviceInterview",
    deviceAnnounce = "deviceAnnounce"
}

interface DeviceInterviewPayload {
    status: 'started' | 'successful' | 'failed';
    device: Device;
}

interface DeviceAnnouncePayload {
    device: Device;
}

const CommandsLookup: {[s: string]: MessagePayloadType} = {
    'on': 'commandOn',
    'offWithEffect': 'commandOffWithEffect',
    'step': 'commandStep',
    'stop': 'commandStop',
    'hueNotification': 'commandHueNotification',
    'off': 'commandOff',
    'stepColorTemp': 'commandStepColorTemp',
    'moveWithOnOff': 'commandMoveWithOnOff',
    'move': 'commandMove',
    'moveHue': 'commandMoveHue',
    'moveToSaturation': 'commandMoveToSaturation',
    'stopWithOnOff': 'commandStopWithOnOff',
    'moveToLevelWithOnOff': 'commandMoveToLevelWithOnOff',
    'toggle': 'commandToggle',
    'tradfriArrowSingle': 'commandTradfriArrowSingle',
    'tradfriArrowHold': 'commandTradfriArrowHold',
    'tradfriArrowRelease': 'commandTradfriArrowRelease',
    'stepWithOnOff': 'commandStepWithOnOff',
    'moveToColorTemp': 'commandMoveToColorTemp',
    'moveToColor': 'commandMoveToColor',
    'onWithTimedOff': 'commandOnWithTimedOff',
    'recall': 'commandRecall',
    'arm': 'commandArm',
    'panic': 'commandPanic',
    'emergency': 'commandEmergency',
    'operationEventNotification': 'commandOperationEventNotification',
};

type MessagePayloadType =
    // Global
    'attributeReport' | 'readResponse' |
    // Specific
    'commandOn' | 'commandOffWithEffect' | 'commandStep' | 'commandStop' | 'commandHueNotification' |
    'commandOff' | 'commandStepColorTemp' | 'commandMoveWithOnOff' | 'commandMove' | 'commandMoveHue' |
    'commandMoveToSaturation' | 'commandStopWithOnOff' | 'commandMoveToLevelWithOnOff' | 'commandToggle' |
    'commandTradfriArrowSingle' | 'commandTradfriArrowHold' | 'commandTradfriArrowRelease' |
    'commandStepWithOnOff' | 'commandMoveToColorTemp' | 'commandMoveToColor' | 'commandOnWithTimedOff' |
    'commandRecall' | 'commandArm' | 'commandPanic' | 'commandEmergency' |
    'commandOperationEventNotification';

interface MessagePayload {
    type: MessagePayloadType;
    device: Device;
    endpoint?: Endpoint;
    linkquality?: number;
    groupID?: number;
    // eslint-disable-next-line
    data?: KeyValue;
}

export {
    Events, MessagePayload, MessagePayloadType, CommandsLookup, DeviceInterviewPayload, DeviceAnnouncePayload,
}