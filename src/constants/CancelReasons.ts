export enum CancelReasons {
	Failed = 'Failed',
	Aborted = 'Aborted',
	TimedOut = 'TimedOut',
	AccessDenied = 'AccessDenied',
	ConnectionClosed = 'ConnectionClosed',
	ConnectionReset = 'ConnectionReset',
	ConnectionRefused = 'ConnectionRefused',
	ConnectionAborted = 'ConnectionAborted',
	ConnectionFailed = 'ConnectionFailed',
	NameNotResolved = 'NameNotResolved',
	InternetDisconnected = 'InternetDisconnected',
	AddressUnreachable = 'AddressUnreachable',
	BlockedByClient = 'BlockedByClient',
	BlockedByResponse = 'BlockedByResponse',
}

export const cancelReasonsList = [
	CancelReasons.Failed,
	CancelReasons.Aborted,
	CancelReasons.TimedOut,
	CancelReasons.AccessDenied,
	CancelReasons.ConnectionClosed,
	CancelReasons.ConnectionReset,
	CancelReasons.ConnectionRefused,
	CancelReasons.ConnectionAborted,
	CancelReasons.ConnectionFailed,
	CancelReasons.NameNotResolved,
	CancelReasons.InternetDisconnected,
	CancelReasons.AddressUnreachable,
	CancelReasons.BlockedByClient,
	CancelReasons.BlockedByResponse,
];