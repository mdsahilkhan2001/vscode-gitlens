import type { TelemetrySendEventParams } from '../../protocol';

export const telemetryEventName = 'gl-telemetry-fired';

declare global {
	interface WindowEventMap {
		[telemetryEventName]: CustomEvent<TelemetrySendEventParams>;
	}
}
