let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
    //apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'https://wallet.plenteum.com/api/',
    apiUrl: 'https://wallet.moncoin.io/api/', //temporary testing front end
	mainnetExplorerUrl: "https://exp.moncoin.io",
    coinUnitPlaces: 9,
    coinDisplayUnitPlaces: 9,
	txMinConfirms: 2,         
	txCoinbaseMinConfirms: 2, 
	addressPrefix: 2199681,
	integratedAddressPrefix: 2199681,
	feePerKB: new JSBigInt('0'), 
	dustThreshold: new JSBigInt('10'),//used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 3, // default value mixins
	idleTimeout: 30,
	idleWarningDuration: 20,
	coinSymbol: 'MON',
	coinName: 'MONCoin',
	coinUriPrefix: 'moncoin:',
	avgBlockTime: 30,
	maxBlockNumber: 500000000,
};
