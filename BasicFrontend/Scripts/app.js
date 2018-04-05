/* jquery.scrollex v0.2.1 | (c) n33 | n33.co @n33co | MIT */
!function (t) { function e(t, e, n) { return "string" == typeof t && ("%" == t.slice(-1) ? t = parseInt(t.substring(0, t.length - 1)) / 100 * e : "vh" == t.slice(-2) ? t = parseInt(t.substring(0, t.length - 2)) / 100 * n : "px" == t.slice(-2) && (t = parseInt(t.substring(0, t.length - 2)))), t } var n = t(window), i = 1, o = {}; n.on("scroll", function () { var e = n.scrollTop(); t.map(o, function (t) { window.clearTimeout(t.timeoutId), t.timeoutId = window.setTimeout(function () { t.handler(e) }, t.options.delay) }) }).on("load", function () { n.trigger("scroll") }), jQuery.fn.scrollex = function (l) { var s = t(this); if (0 == this.length) return s; if (this.length > 1) { for (var r = 0; r < this.length; r++)t(this[r]).scrollex(l); return s } if (s.data("_scrollexId")) return s; var a, u, h, c, p; switch (a = i++ , u = jQuery.extend({ top: 0, bottom: 0, delay: 0, mode: "default", enter: null, leave: null, initialize: null, terminate: null, scroll: null }, l), u.mode) { case "top": h = function (t, e, n, i, o) { return t >= i && o >= t }; break; case "bottom": h = function (t, e, n, i, o) { return n >= i && o >= n }; break; case "middle": h = function (t, e, n, i, o) { return e >= i && o >= e }; break; case "top-only": h = function (t, e, n, i, o) { return i >= t && n >= i }; break; case "bottom-only": h = function (t, e, n, i, o) { return n >= o && o >= t }; break; default: case "default": h = function (t, e, n, i, o) { return n >= i && o >= t } }return c = function (t) { var i, o, l, s, r, a, u = this.state, h = !1, c = this.$element.offset(); i = n.height(), o = t + i / 2, l = t + i, s = this.$element.outerHeight(), r = c.top + e(this.options.top, s, i), a = c.top + s - e(this.options.bottom, s, i), h = this.test(t, o, l, r, a), h != u && (this.state = h, h ? this.options.enter && this.options.enter.apply(this.element) : this.options.leave && this.options.leave.apply(this.element)), this.options.scroll && this.options.scroll.apply(this.element, [(o - r) / (a - r)]) }, p = { id: a, options: u, test: h, handler: c, state: null, element: this, $element: s, timeoutId: null }, o[a] = p, s.data("_scrollexId", p.id), p.options.initialize && p.options.initialize.apply(this), s }, jQuery.fn.unscrollex = function () { var e = t(this); if (0 == this.length) return e; if (this.length > 1) { for (var n = 0; n < this.length; n++)t(this[n]).unscrollex(); return e } var i, l; return (i = e.data("_scrollexId")) ? (l = o[i], window.clearTimeout(l.timeoutId), delete o[i], e.removeData("_scrollexId"), l.options.terminate && l.options.terminate.apply(this), e) : e } }(jQuery);
/* jquery.scrolly v1.0.0-dev | (c) n33 | n33.co @n33co | MIT */
(function (e) { function u(s, o) { var u, a, f; if ((u = e(s))[t] == 0) return n; a = u[i]()[r]; switch (o.anchor) { case "middle": f = a - (e(window).height() - u.outerHeight()) / 2; break; default: case r: f = Math.max(a, 0) }return typeof o[i] == "function" ? f -= o[i]() : f -= o[i], f } var t = "length", n = null, r = "top", i = "offset", s = "click.scrolly", o = e(window); e.fn.scrolly = function (i) { var o, a, f, l, c = e(this); if (this[t] == 0) return c; if (this[t] > 1) { for (o = 0; o < this[t]; o++)e(this[o]).scrolly(i); return c } l = n, f = c.attr("href"); if (f.charAt(0) != "#" || f[t] < 2) return c; a = jQuery.extend({ anchor: r, easing: "swing", offset: 0, parent: e("body,html"), pollOnce: !1, speed: 1e3 }, i), a.pollOnce && (l = u(f, a)), c.off(s).on(s, function (e) { var t = l !== n ? l : u(f, a); t !== n && (e.preventDefault(), a.parent.stop().animate({ scrollTop: t }, a.speed, a.easing)) }) } })(jQuery);
/* skel.js v3.0.1 | (c) skel.io | MIT licensed */

var skel = (function() { "use strict"; var _ = {

	/******************************/
	/* Properties                 */
	/******************************/

		/**
		 * IDs of breakpoints that are currently active.
		 * @type {array}
		 */
		breakpointIds: null,

		/**
		 * Events.
		 * @type {object}
		 */
		events: {},

		/**
		 * Are we initialized?
		 * @type {bool}
		 */
		isInit: false,

		/**
		 * Objects.
		 * @type {object}
		 */
		obj: {

			// Attachments.
				attachments: {},

		 	// Breakpoints.
				breakpoints: {},

			// Head.
				head: null,

			// States.
				states: {}

		},

		/**
		 * State ID delimiter (don't change this).
		 * @type {string}
		 */
		sd: '/',

		/**
		 * Current state.
		 * @type {object}
		 */
		state: null,

		/**
		 * State handlers.
		 * @type {object}
		 */
		stateHandlers: {},

		/**
		 * Current state ID.
		 * @type {string}
		 */
		stateId: '',

		/**
		 * Internal vars.
		 * @type {object}
		 */
		vars: {},

	/******************************/
	/* Methods: Utility           */
	/******************************/

		/**
		 * Does stuff when the DOM is ready.
		 * @param {function} f Function.
		 */
		DOMReady: null,

		/**
		 * Wrapper/polyfill for (Array.prototype|String).indexOf.
		 * @param {Array|string} search Object or string to search.
		 * @param {integer} from Starting index.
		 * @return {integer} Matching index (or -1 if there's no match).
		 */
		indexOf: null,

		/**
		 * Wrapper/polyfill for Array.isArray.
		 * @param {array} x Variable to check.
		 * @return {bool} If true, x is an array. If false, x is not an array.
		 */
		isArray: null,

		/**
		 * Safe replacement for "for..in". Avoids stuff that doesn't belong to the array itself (eg. properties added to Array.prototype).
		 * @param {Array} a Array to iterate.
		 * @param {function} f(index) Function to call on each element.
		 */
		iterate: null,

		/**
		 * Determines if a media query matches the current browser state.
		 * @param {string} query Media query.
		 * @return {bool} True if it matches, false if not.
		 */
		matchesMedia: null,

		/**
		 * Extends x by y.
		 * @param {object} x Target object.
		 * @param {object} y Source object.
		 */
		extend: function(x, y) {

			_.iterate(y, function(k) {

				if (_.isArray(y[k])) {

					if (!_.isArray(x[k]))
						x[k] = [];

					_.extend(x[k], y[k]);

				}
				else if (typeof y[k] == 'object') {

					if (typeof x[k] != 'object')
						x[k] = {};

					_.extend(x[k], y[k]);

				}
				else
					x[k] = y[k];

			});

		},

		/**
		 * Creates a new style element.
		 * @param {string} content Content.
		 * @return {DOMHTMLElement} Style element.
		 */
		newStyle: function(content) {

			var e = document.createElement('style');
				e.type = 'text/css';
				e.innerHTML = content;

			return e;

		},

	/******************************/
	/* Methods: API               */
	/******************************/

		/**
		 * Temporary element for canUse()
		 * @type {DOMElement}
		 */
		_canUse: null,

		/**
		 * Determines if the browser supports a given property.
		 * @param {string} p Property.
		 * @return {bool} True if property is supported, false if not.
		 */
		canUse: function(p) {

			// Create temporary element if it doesn't already exist.
				if (!_._canUse)
					_._canUse = document.createElement('div');

			// Check for property.
				var e = _._canUse.style,
					up = p.charAt(0).toUpperCase() + p.slice(1);

				return	(
							p in e
						||	('Moz' + up) in e
						||	('Webkit' + up) in e
						||	('O' + up) in e
						||	('ms' + up) in e
				);

		},

	/******************************/
	/* Methods: Events            */
	/******************************/

		/**
		 * Registers one or more events.
		 * @param {string} names Space-delimited list of event names.
		 * @param {function} f Function.
		 */
		on: function(names, f) {

			var a = names.split(/[\s]+/);

			_.iterate(a, function(i) {

				var name = a[i];

				// Manually trigger event if applicable.
					if (_.isInit) {

						// Init.
							if (name == 'init') {

								// Trigger event.
									(f)();

								// This only gets called once, so there's no need to actually
								// register it.
									return;

							}

						// Change.
							else if (name == 'change') {

								// Trigger event.
									(f)();

							}

						// Activate / Not.
							else {

								var x = name.charAt(0);

								if (x == '+' || x == '!') {

									var y = name.substring(1);

									if (y in _.obj.breakpoints) {

										// Activate.
											if (x == '+' && _.obj.breakpoints[y].active) {

												// Trigger event.
													(f)();

											}

										// Not.
											else if (x == '!' && !_.obj.breakpoints[y].active) {

												// Trigger event.
													(f)();

												// This only gets called once, so there's no need to actually
												// register it.
													return;

											}

									}

								}

							}

					}

				// No previous events of this type registered? Set up its array.
					if (!_.events[name])
						_.events[name] = [];

				// Register event.
					_.events[name].push(f);

			});

			return _;

		},

		/**
		 * Triggers an event.
		 * @param {string} name Name.
		 */
		trigger: function(name) {

			// No events registered? Bail.
				if (!_.events[name] || _.events[name].length == 0)
					return;

			// Step through and call events.
				_.iterate(_.events[name], function(k) {
					(_.events[name][k])();
				});

			return _;

		},

	/******************************/
	/* Methods: Breakpoints       */
	/******************************/

		/**
		 * Gets a breakpoint.
		 * @param {string} id Breakpoint ID.
		 * @return {Breakpoint} Breakpoint.
		 */
		breakpoint: function(id) {
			return _.obj.breakpoints[id];
		},

		/**
		 * Sets breakpoints.
		 * @param {object} breakpoints Breakpoints.
		 */
		breakpoints: function(breakpoints) {

			// Breakpoint class.
				function Breakpoint(id, media) {

					this.name = this.id = id;
					this.media = media;
					this.active = false;
					this.wasActive = false;

				};

					Breakpoint.prototype.matches = function() {
						return (_.matchesMedia(this.media));
					};

					Breakpoint.prototype.sync = function() {

						this.wasActive = this.active;
						this.active = this.matches();

					};

			// Create breakpoints.
				_.iterate(breakpoints, function(id) {
					_.obj.breakpoints[id] = new Breakpoint(id, breakpoints[id]);
				});

			// Initial poll.
				window.setTimeout(function() {
					_.poll();
				}, 0);

			return _;

		},

	/******************************/
	/* Methods: States            */
	/******************************/

		/**
		 * Adds a state handler.
		 * @param {string} id ID.
		 * @param {function} f Handler function.
		 */
		addStateHandler: function(id, f) {

			// Add handler.
				_.stateHandlers[id] = f;

			// Call it.
				//_.callStateHandler(id);

		},

		/**
		 * Calls a state handler.
		 * @param {string} id ID.
		 */
		callStateHandler: function(id) {

			// Call handler.
				var attachments = (_.stateHandlers[id])();

			// Add attachments to state (if any).
				_.iterate(attachments, function(i) {
					_.state.attachments.push(attachments[i]);
				});

		},

		/**
		 * Switches to a different state.
		 * @param {string} newStateId New state ID.
		 */
		changeState: function(newStateId) {

			// Sync all breakpoints.
				_.iterate(_.obj.breakpoints, function(id) {
					_.obj.breakpoints[id].sync();
				});

			// Set last state var.
				_.vars.lastStateId = _.stateId;

			// Change state ID.
				_.stateId = newStateId;
				_.breakpointIds = (_.stateId === _.sd ? [] : _.stateId.substring(1).split(_.sd));

				console.log('[skel] changing states (id: "' + _.stateId + '")');

			// Get state.
				if (!_.obj.states[_.stateId]) {

					console.log('[skel] - not found. building ...');

					// Build state.
						_.obj.states[_.stateId] = {
							attachments: []
						};

						_.state = _.obj.states[_.stateId];

					// Call all state handlers.
						_.iterate(_.stateHandlers, _.callStateHandler);

				}
				else {

					console.log('[skel] - found');

					// Get state.
						_.state = _.obj.states[_.stateId];

				}

			// Detach all attachments *EXCEPT* state's.
				_.detachAll(_.state.attachments);

			// Attach state's attachments.
				_.attachAll(_.state.attachments);

			// Expose state and stateId as vars.
				_.vars.stateId = _.stateId;
				_.vars.state = _.state;

			// Trigger change event.
				_.trigger('change');

			// Trigger activate/deactivate events.
				_.iterate(_.obj.breakpoints, function(id) {

					// Breakpoint is now active ...
						if (_.obj.breakpoints[id].active) {

							// ... and it wasn't active before? Trigger activate event.
								if (!_.obj.breakpoints[id].wasActive)
									_.trigger('+' + id);

						}

					// Breakpoint is not active ...
						else {

							// ... but it was active before? Trigger deactivate event.
								if (_.obj.breakpoints[id].wasActive)
									_.trigger('-' + id);

						}

				});

		},

		/**
		 * Generates a state-specific config.
		 * @param {object} baseConfig Base config.
		 * @param {object} breakpointConfigs Breakpoint-specific configs.
		 * @return {object} State-specific config.
		 */
		generateStateConfig: function(baseConfig, breakpointConfigs) {

			var x = {};

			// Extend with base config.
				_.extend(x, baseConfig);

			// Extend with configs for each active breakpoint.
				_.iterate(_.breakpointIds, function(k) {
					_.extend(x, breakpointConfigs[_.breakpointIds[k]]);
				});

			return x;

		},

		/**
		 * Gets the current state ID.
		 * @return {string} State ID.
		 */
		getStateId: function() {

			var stateId = '';

			_.iterate(_.obj.breakpoints, function(id) {

				var b = _.obj.breakpoints[id];

				// Active? Append breakpoint ID to state ID.
					if (b.matches())
						stateId += _.sd + b.id;

			});

			return stateId;

		},

		/**
		 * Polls for state changes.
		 */
		poll: function() {

			var newStateId = '';

			// Determine new state.
				newStateId = _.getStateId();

				if (newStateId === '')
					newStateId = _.sd;

			// State changed?
				if (newStateId !== _.stateId)
					_.changeState(newStateId);

		},

	/******************************/
	/* Methods: Attachments       */
	/******************************/

		/**
		 * Attach point for attach()
		 * @type {DOMElement}
		 */
		_attach: null,

		/**
		 * Attaches a single attachment.
		 * @param {object} attachment Attachment.
		 * @return bool True on success, false on failure.
		 */
		attach: function(attachment) {

			var	h = _.obj.head,
				e = attachment.element;

			// Already attached? Bail.
				if (e.parentNode
				&&	e.parentNode.tagName)
					return false;

			// Add to <head>

				// No attach point yet? Use <head>'s first child.
					if (!_._attach)
						_._attach = h.firstChild;

				// Insert element.
					h.insertBefore(e, _._attach.nextSibling);

				// Permanent attachment? Make its element the new attach point.
					if (attachment.permanent)
						_._attach = e;

			console.log('[skel] ' + attachment.id + ': attached (' + attachment.priority + ')');

			return true;

		},

		/**
		 * Attaches a list of attachments.
		 * @param {array} attachments Attachments.
		 */
		attachAll: function(attachments) {

			var a = [];

			// Organize attachments by priority.
				_.iterate(attachments, function(k) {

					if (!a[ attachments[k].priority ])
						a[ attachments[k].priority ] = [];

					a[ attachments[k].priority ].push(attachments[k]);

				});

			// Reverse array order.
				a.reverse();

			// Step through each priority.
				_.iterate(a, function(k) {
					_.iterate(a[k], function(x) {
						_.attach(a[k][x]);
					});
				});

		},

		/**
		 * Detaches a single attachment.
		 * @param {object} attachment Attachment.
		 * @return bool True on success, false on failure.
		 */
		detach: function(attachment) {

			var	e = attachment.element;

			// Permanent or already detached? Bail.
				if (attachment.permanent
				||	!e.parentNode
				||	(e.parentNode && !e.parentNode.tagName))
					return false;

			// Detach.
				e.parentNode.removeChild(e);

			return true;

		},

		/**
		 * Detaches all attachments.
		 * @param {object} exclude A list of attachments to exclude.
		 */
		detachAll: function(exclude) {

			var l = {};

			// Build exclusion list (for faster lookups).
				_.iterate(exclude, function(k) {
					l[exclude[k].id] = true;
				});

			_.iterate(_.obj.attachments, function(id) {

				// In our exclusion list? Bail.
					if (id in l)
						return;

				// Attempt to detach.
					_.detach(_.obj.attachments[id]);

			});

		},

		attachment: function(id) {
			return (id in _.obj.attachments ? _.obj.attachments[id] : null);
		},

		/**
		 * Creates a new attachment.
		 * @param {string} id ID.
		 * @param {DOMElement} element DOM element.
		 */
		newAttachment: function(id, element, priority, permanent) {

			return (_.obj.attachments[id] = {
				id: id,
				element: element,
				priority: priority,
				permanent: permanent
			});

		},

	/******************************/
	/* Methods: Init              */
	/******************************/

		/**
		 * Initializes skel.
		 * This has to be explicitly called by the user.
		 */
		init: function() {

			// Initialize stuff.
				_.initMethods();
				_.initVars();
				_.initEvents();

			// Tmp.
				_.obj.head = document.getElementsByTagName('head')[0];

			// Mark as initialized.
				_.isInit = true;

			// Trigger init event.
				_.trigger('init');

			console.log('[skel] initialized.');

		},

		/**
		 * Initializes browser events.
		 */
		initEvents: function() {

			// On resize.
				_.on('resize', function() { _.poll(); });

			// On orientation change.
				_.on('orientationChange', function() { _.poll(); });

			// Wrap "ready" event.
				_.DOMReady(function() {
					_.trigger('ready');
				});

			// Non-destructively register skel events to window.

				// Load.
					if (window.onload)
						_.on('load', window.onload);

					window.onload = function() { _.trigger('load'); };

				// Resize.
					if (window.onresize)
						_.on('resize', window.onresize);

					window.onresize = function() { _.trigger('resize'); };

				// Orientation change.
					if (window.onorientationchange)
						_.on('orientationChange', window.onorientationchange);

					window.onorientationchange = function() { _.trigger('orientationChange'); };

		},

		/**
		 * Initializes methods.
		 */
		initMethods: function() {

			// _.DOMReady (based on github.com/ded/domready by @ded; domready (c) Dustin Diaz 2014 - License MIT)

				// Hack: Use older version for browsers that don't support addEventListener (*cough* IE8).
					if (!document.addEventListener)
						!function(e,t){_.DOMReady = t()}("domready",function(e){function p(e){h=1;while(e=t.shift())e()}var t=[],n,r=!1,i=document,s=i.documentElement,o=s.doScroll,u="DOMContentLoaded",a="addEventListener",f="onreadystatechange",l="readyState",c=o?/^loaded|^c/:/^loaded|c/,h=c.test(i[l]);return i[a]&&i[a](u,n=function(){i.removeEventListener(u,n,r),p()},r),o&&i.attachEvent(f,n=function(){/^c/.test(i[l])&&(i.detachEvent(f,n),p())}),e=o?function(n){self!=top?h?n():t.push(n):function(){try{s.doScroll("left")}catch(t){return setTimeout(function(){e(n)},50)}n()}()}:function(e){h?e():t.push(e)}});
				// And everyone else.
					else
						!function(e,t){_.DOMReady = t()}("domready",function(){function s(t){i=1;while(t=e.shift())t()}var e=[],t,n=document,r="DOMContentLoaded",i=/^loaded|^c/.test(n.readyState);return n.addEventListener(r,t=function(){n.removeEventListener(r,t),s()}),function(t){i?t():e.push(t)}});

			// _.indexOf

				// Wrap existing method if it exists.
					if (Array.prototype.indexOf)
						_.indexOf = function(x,b) { return x.indexOf(b) };

				// Otherwise, polyfill.
					else
						_.indexOf = function(x,b){if (typeof x=='string') return x.indexOf(b);var c,a=(b)?b:0,e;if(!this){throw new TypeError()}e=this.length;if(e===0||a>=e){return -1}if(a<0){a=e-Math.abs(a)}for(c=a;c<e;c++){if(this[c]===x){return c}}return -1};

			// _.isArray

				// Wrap existing method if it exists.
					if (Array.isArray)
						_.isArray = function(x) { return Array.isArray(x) };

				// Otherwise, polyfill.
					else
						_.isArray = function(x) { return (Object.prototype.toString.call(x) === '[object Array]') };

			// _.iterate

				// Use Object.keys if it exists (= better performance).
					if (Object.keys)
						_.iterate = function(a, f) {

							if (!a)
								return [];

							var i, k = Object.keys(a);

							for (i = 0; k[i]; i++) {

								if ((f)(k[i], a[k[i]]) === false)
									break;

							}

						};

				// Otherwise, fall back on hasOwnProperty (= slower, but works on older browsers).
					else
						_.iterate = function(a, f) {

							if (!a)
								return [];

							var i;

							for (i in a)
								if (Object.prototype.hasOwnProperty.call(a, i)) {

									if ((f)(i, a[i]) === false)
										break;

								}

						};

			// _.matchesMedia

				// Default: Use matchMedia (all modern browsers)
					if (window.matchMedia)
						_.matchesMedia = function(query) {

							if (query == '')
								return true;

							return window.matchMedia(query).matches;

						};

				// Polyfill 1: Use styleMedia/media (IE9, older Webkit) (derived from github.com/paulirish/matchMedia.js)
					else if (window.styleMedia || window.media)
						_.matchesMedia = function(query) {

							if (query == '')
								return true;

							var styleMedia = (window.styleMedia || window.media);

							return styleMedia.matchMedium(query || 'all');

						};

				// Polyfill 2: Use getComputed Style (???) (derived from github.com/paulirish/matchMedia.js)
					else if (window.getComputedStyle)
						_.matchesMedia = function(query) {

							if (query == '')
								return true;

							var	style = document.createElement('style'),
								script = document.getElementsByTagName('script')[0],
								info = null;

							style.type = 'text/css';
							style.id = 'matchmediajs-test';
							script.parentNode.insertBefore(style, script);
							info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

							var text = '@media ' + query + '{ #matchmediajs-test { width: 1px; } }';

							if (style.styleSheet)
								style.styleSheet.cssText = text;
							else
								style.textContent = text;

							return info.width === '1px';

						};

				// Polyfill 3: Manually parse (IE<9)
					else
						_.matchesMedia = function(query) {

							// Empty query? Always succeed.
								if (query == '')
									return true;

							// Parse query.
								var k, s, a, b, values = { 'min-width': null, 'max-width': null },
									found = false;

								a = query.split(/\s+and\s+/);

								for (k = 0; k < a.length; k++) {

									s = a[k];

									// Operator (key: value)
										if (s.charAt(0) == '(') {

											s = s.substring(1, s.length - 1);
											b = s.split(/:\s+/);

											if (b.length == 2) {

												values[ b[0].replace(/^\s+|\s+$/g, '') ] = parseInt( b[1] );
												found = true;

											}

										}

								}

							// No matches? Query likely contained something unsupported so we automatically fail.
								if (!found)
									return false;

							// Check against viewport.
								var w = document.documentElement.clientWidth,
									h = document.documentElement.clientHeight;

								if ((values['min-width'] !== null && w < values['min-width'])
								||	(values['max-width'] !== null && w > values['max-width'])
								||	(values['min-height'] !== null && h < values['min-height'])
								||	(values['max-height'] !== null && h > values['max-height']))
									return false;

							return true;

						};

			// _.newStyle

				// IE<9 fix.
					if (navigator.userAgent.match(/MSIE ([0-9]+)/)
					&&	RegExp.$1 < 9)
						_.newStyle = function(content) {

							var e = document.createElement('span');
								e.innerHTML = '&nbsp;<style type="text/css">' + content + '</style>';

							return e;

						};

		},

		/**
		 * Initializes the vars.
		 */
		initVars: function() {

			var x, y, a, ua = navigator.userAgent;

			// browser, browserVersion.
				x = 'other';
				y = 0;
				a = [
					['firefox',		/Firefox\/([0-9\.]+)/],
					['bb',			/BlackBerry.+Version\/([0-9\.]+)/],
					['bb',			/BB[0-9]+.+Version\/([0-9\.]+)/],
					['opera',		/OPR\/([0-9\.]+)/],
					['opera',		/Opera\/([0-9\.]+)/],
					['edge',		/Edge\/([0-9\.]+)/],
					['safari',		/Version\/([0-9\.]+).+Safari/],
					['chrome',		/Chrome\/([0-9\.]+)/],
					['ie', 			/MSIE ([0-9]+)/],
					['ie',			/Trident\/.+rv:([0-9]+)/]
				];

				_.iterate(a, function(k, v) {

					if (ua.match(v[1])) {

						x = v[0];
						y = parseFloat(RegExp.$1);

						return false;

					}

				});

				_.vars.browser = x;
				_.vars.browserVersion = y;

			// os, osVersion.
				x = 'other';
				y = 0;
				a = [
					['ios',			/([0-9_]+) like Mac OS X/,			function(v) { return v.replace('_', '.').replace('_', ''); }],
					['ios',			/CPU like Mac OS X/,				function(v) { return 0 }],
					['wp',			/Windows Phone ([0-9\.]+)/,			null],
					['android',		/Android ([0-9\.]+)/,				null],
					['mac',			/Macintosh.+Mac OS X ([0-9_]+)/,	function(v) { return v.replace('_', '.').replace('_', ''); }],
					['windows',		/Windows NT ([0-9\.]+)/,			null],
					['bb',			/BlackBerry.+Version\/([0-9\.]+)/,	null],
					['bb',			/BB[0-9]+.+Version\/([0-9\.]+)/,	null]
				];

				_.iterate(a, function(k, v) {

					if (ua.match(v[1])) {

						x = v[0];
						y = parseFloat( v[2] ? (v[2])(RegExp.$1) : RegExp.$1 );

						return false;

					}

				});

				_.vars.os = x;
				_.vars.osVersion = y;

			// IEVersion.
				_.vars.IEVersion = (_.vars.browser == 'ie' ? _.vars.browserVersion : 99);

			// touch.
				_.vars.touch = (_.vars.os == 'wp' ? (navigator.msMaxTouchPoints > 0) : !!('ontouchstart' in window));

			// mobile.
				_.vars.mobile = (_.vars.os == 'wp' || _.vars.os == 'android' || _.vars.os == 'ios' || _.vars.os == 'bb');

		},

}; _.init(); return _; })();

// UMD Wrapper (github.com/umdjs/umd/blob/master/returnExports.js | @umdjs + @nason)
(function(root, factory) {

	// AMD.
		if (typeof define === 'function' && define.amd)
			define([], factory);

	// Node.
		else if (typeof exports === 'object')
			module.exports = factory();

	// Browser global.
		else
			root.skel = factory();

}(this, function() { return skel; }));

/* skel-viewport.js v3.0.1 | (c) skel.io | MIT licensed */

(function (_) {
    "use strict"; var __ = {

        /******************************/
        /* Properties                 */
        /******************************/

		/**
		 * Default config.
		 * @type {object}
		 */
        config: {

            // Width.
            width: 'device-width',

            // Height.
            height: '',

            // Scalable?
            scalable: true,

            // Breakpoints.
            breakpoints: {}

        },

        /******************************/
        /* Methods                    */
        /******************************/

		/**
		 * Initializes Viewport module.
		 * @param {object} config Config.
		 */
        init: function (config) {

            // Extend with user config.
            _.extend(__.config, config);

            // Add state handler.
            _.addStateHandler('viewport', __.stateHandler);

            // Add initial <meta> element.
            _.attach(_.newAttachment(
                'mv',
                __.newViewportMeta('initial-scale=1'),
                1,
                true
            ));

            // Hack: IE viewport fix.
            if (_.vars.browser == 'ie'
                && _.vars.IEVersion >= 10) {

                // Add <style> element for -ms-viewport.
                _.attach(_.newAttachment(
                    'mVie',
                    _.newStyle('@-ms-viewport{width:device-width}'),
                    1,
                    true
                ));

                // Force browser to accept new viewport.
                window.setTimeout(function () {

                    var body = document.getElementsByTagName('body')[0],
                        h = body.style.height;

                    body.style.height = '10000px';

                    window.setTimeout(function () {
                        body.style.height = h;
                    }, 250);

                }, 250);

            }

            return _;

        },

		/**
		 * Creates a new viewport <meta> element.
		 * @param {string} content Content.
		 * @return {DOMElement} Viewport <meta> element.
		 */
        newViewportMeta: function (content) {

            var e = document.createElement('meta');
            e.name = 'viewport';
            e.content = content;

            return e;

        },

		/**
		 * State handler.
		 * @return {array} Attachments.
		 */
        stateHandler: function () {

            var attachment, config,
                a;

            // Generate state config.
            config = _.generateStateConfig(
                {
                    width: __.config.width,
                    height: __.config.height,
                    scalable: __.config.scalable
                },
                __.config.breakpoints
            );

            // Create <meta> element attachment.

            // Content.
            a = [];

            // Scalable.
            a.push('user-scalable=' + (config.scalable ? 'yes' : 'no'));

            // Width.
            if (config.width)
                a.push('width=' + config.width);

            // Height.
            if (config.height)
                a.push('height=' + config.height);

            // Set initial scale if we're using device-width.
            if (config.width == 'device-width')
                a.push('initial-scale=1');

            // Attachment.
            attachment = _.newAttachment(
                'mv-' + _.stateId,
                __.newViewportMeta(a.join(',')),
                1
            );

            return [attachment];

        }

    }; _.viewport = __.init;
})(skel);
/* skel-layout.js v3.0.1 | (c) skel.io | MIT licensed */

(function (_) {
    "use strict"; var __ = {

        /******************************/
        /* Properties                 */
        /******************************/

		/**
		 * Default config.
		 * @type {object}
		 */
        config: {

            // Breakpoints.
            breakpoints: {},

            // Box model (false = don't apply a box model).
            boxModel: false,

            // Conditionals.
            conditionals: false,

            // Width of container elements (N, 'Npx', 'Nem', etc).
            containers: false,

            // Grid.
            grid: false,

            // Stylesheet.
            href: false,

            // Reset mode (false = don't reset, 'normalize' = normalize.css, 'full' = Eric Meyer's resets).
            reset: false

        },

		/**
		 * CSS code (normalize, reset).
		 * @type {object}
		 */
        css: {

            // Box model.
            bm: '*,*:before,*:after{-moz-box-sizing:&-box;-webkit-box-sizing:&-box;box-sizing:&-box}',

            // Normalize.
            // normalize.css v3.0.2 | MIT License | git.io/normalize
            n: 'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}',

            // Reset.
            // http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 | License: none (public domain)
            r: 'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}',

            // Grid cells.
            gc: function (x) {
                return '.\\31 2u' + x + ',.\\31 2u\\24' + x + '{width:100%;clear:none;margin-left:0}' +
                    '.\\31 1u' + x + ',.\\31 1u\\24' + x + '{width:91.6666666667%;clear:none;margin-left:0}' +
                    '.\\31 0u' + x + ',.\\31 0u\\24' + x + '{width:83.3333333333%;clear:none;margin-left:0}' +
                    '.\\39 u' + x + ',.\\39 u\\24' + x + '{width:75%;clear:none;margin-left:0}' +
                    '.\\38 u' + x + ',.\\38 u\\24' + x + '{width:66.6666666667%;clear:none;margin-left:0}' +
                    '.\\37 u' + x + ',.\\37 u\\24' + x + '{width:58.3333333333%;clear:none;margin-left:0}' +
                    '.\\36 u' + x + ',.\\36 u\\24' + x + '{width:50%;clear:none;margin-left:0}' +
                    '.\\35 u' + x + ',.\\35 u\\24' + x + '{width:41.6666666667%;clear:none;margin-left:0}' +
                    '.\\34 u' + x + ',.\\34 u\\24' + x + '{width:33.3333333333%;clear:none;margin-left:0}' +
                    '.\\33 u' + x + ',.\\33 u\\24' + x + '{width:25%;clear:none;margin-left:0}' +
                    '.\\32 u' + x + ',.\\32 u\\24' + x + '{width:16.6666666667%;clear:none;margin-left:0}' +
                    '.\\31 u' + x + ',.\\31 u\\24' + x + '{width:8.3333333333%;clear:none;margin-left:0}' +
                    '.\\31 2u\\24' + x + '+*,' +
                    '.\\31 1u\\24' + x + '+*,' +
                    '.\\31 0u\\24' + x + '+*,' +
                    '.\\39 u\\24' + x + '+*,' +
                    '.\\38 u\\24' + x + '+*,' +
                    '.\\37 u\\24' + x + '+*,' +
                    '.\\36 u\\24' + x + '+*,' +
                    '.\\35 u\\24' + x + '+*,' +
                    '.\\34 u\\24' + x + '+*,' +
                    '.\\33 u\\24' + x + '+*,' +
                    '.\\32 u\\24' + x + '+*,' +
                    '.\\31 u\\24' + x + '+*{' +
                    'clear:left;' +
                    '}' +
                    '.\\-11u' + x + '{margin-left:91.6666666667%}' +
                    '.\\-10u' + x + '{margin-left:83.3333333333%}' +
                    '.\\-9u' + x + '{margin-left:75%}' +
                    '.\\-8u' + x + '{margin-left:66.6666666667%}' +
                    '.\\-7u' + x + '{margin-left:58.3333333333%}' +
                    '.\\-6u' + x + '{margin-left:50%}' +
                    '.\\-5u' + x + '{margin-left:41.6666666667%}' +
                    '.\\-4u' + x + '{margin-left:33.3333333333%}' +
                    '.\\-3u' + x + '{margin-left:25%}' +
                    '.\\-2u' + x + '{margin-left:16.6666666667%}' +
                    '.\\-1u' + x + '{margin-left:8.3333333333%}'

            }

        },

		/**
		 * Grid responsive level map.
		 * @type object
		 */
        gridLevelMap: { k: {}, v: {} },

		/**
		 * Maximum grid responsive level.
		 * @type integer
		 */
        gridLevelMax: 1,

		/**
		 * State config cache.
		 * @type object
		 */
        stateConfigs: {},

        /******************************/
        /* Methods                    */
        /******************************/

		/**
		 * Applies grid transforms.
		 */
        applyGridTransforms: function () {

            var config = __.stateConfigs[_.stateId];

            // Shifts cells marked as "important" to the front of their respective rows.
            var key = '_skel_important', cells = [],
                i, a;

            // Get "important" cells.

            // Via responsive level.
            for (i = 1; i <= __.gridLevelMax; i++) {

                a = document.querySelectorAll('.important\\28 ' + __.gridLevelMap.k[i] + '\\29');

                _.iterate(a, function (k) {
                    cells.push(a[k]);
                });

            }

            // Step through cells.
            _.iterate(cells, function (i) {

                // Just in case.
                if (i === 'length')
                    return;

                var cell = cells[i], parent = cell.parentNode,
                    placeholder, mode = false, k, l;

                // No parent? Bail.
                if (!parent)
                    return;

                // Not moved? Move it.
                if (!Object.prototype.hasOwnProperty.call(cell, key) || cell[key] === false) {

                    // Determine mode.

                    // Responsive level?
                    if (cell.className.match(/important\((.+)\)/) && (l = parseInt(__.gridLevelMap.v[RegExp.$1])) <= config.grid.level)
                        mode = 'l';

                    // No valid mode? Bail.
                    if (!mode)
                        return;

                    // Get placeholder node (which will serve as our point of reference for when this cell needs to move back).
                    k = 'previousSibling';

                    placeholder = cell[k];

                    while (placeholder && placeholder.nodeName == '#text')
                        placeholder = placeholder[k];

                    // Couldn't find anything? Means this cell's already at the front, so bail.
                    if (!placeholder)
                        return;

                    // Move cell to front.
                    console.log('[skel-layout] important: moving to front of row (' + i + ')');

                    parent.insertBefore(
                        cell,
                        parent.firstChild
                    );

                    // Mark cell as moved.
                    cell[key] = {
                        placeholder: placeholder,
                        mode: mode,
                        level: l
                    };

                }

                // Moved already?
                else {

                    placeholder = cell[key].placeholder;
                    mode = cell[key].mode;

                    // Cell doesn't need to move? Bail.
                    if (mode == 'l' && cell[key].level <= config.grid.level)
                        return;

                    // Move cell back to its original location (using our placeholder).
                    console.log('[skel-layout] important: moving back (' + i + ')');

                    parent.insertBefore(
                        cell,
                        placeholder.nextSibling
                    );

                    // Unmark cell as moved.
                    cell[key] = false;

                }

            });

        },

		/**
		 * Initializes layout module.
		 * @param {object} config Config.
		 */
        init: function (config) {

            // Extend with user config.
            _.extend(__.config, config);

            // Add state handler.
            _.addStateHandler('layout', __.stateHandler);

            // Reorder (and, if necessary, fill out) breakpoints.
            var c = {};

            _.iterate(_.obj.breakpoints, function (id) {

                c[id] = {};

                if (id in __.config.breakpoints)
                    _.extend(c[id], __.config.breakpoints[id]);

            });

            __.config.breakpoints = c;

            // Containers.
            if (__.config.containers) {

                // Apply defaults if value is just 'true'.
                if (__.config.containers === true)
                    __.config.containers = 960;

            }

            // Grid.
            if (__.config.grid) {

                // Apply defaults if value is just 'true'.
                if (__.config.grid === true)
                    __.config.grid = {

                        // Responsive level.
                        level: 1,

                        // Size of column gutters (N, 'Npx', 'Nem', etc).
                        // Use [column, row] to set both column and row gutters.
                        gutters: 40

                    };

                // Assign responsive levels.
                _.iterate(__.config.breakpoints, function (id) {

                    var c = __.config.breakpoints[id];

                    __.gridLevelMax++;

                    if (!('grid' in c))
                        c.grid = {};

                    // Set responsive level.
                    c.grid.level = __.gridLevelMax;

                    // Update map (breakpoint ID => responsive level)
                    __.gridLevelMap.k[__.gridLevelMax] = id;
                    __.gridLevelMap.v[id] = __.gridLevelMax;

                });

                // Set up change event.
                _.on('change', function () {
                    __.applyGridTransforms();
                });

            }

            // STYLE: Base CSS.
            var s = '';

            // Reset.
            switch (__.config.reset) {

                case 'full':
                    s += __.css.r;
                    break;

                case 'normalize':
                    s += __.css.n;
                    break;

            }

            // Box model.
            if (__.config.boxModel)
                s += __.css.bm.split('&').join(__.config.boxModel);

            // Grid.
            if (__.config.grid)
                s += '.row{border-bottom:solid 1px transparent;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}' +
                    '.row>*{float:left;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}' +
                    '.row:after,.row:before{content:"";display:block;clear:both;height:0}' +
                    '.row.uniform>*>:first-child{margin-top:0}' +
                    '.row.uniform>*>:last-child{margin-bottom:0}' +
                    __.css.gc('');

            // Create and attach a <style> element if we actually have stuff to put in it.
            if (s != '')
                _.attach(_.newAttachment(
                    'sB',
                    _.newStyle(s),
                    2,
                    true
                ));

            // STYLESHEET: Base.
            if (__.config.href)
                _.attach(_.newAttachment(
                    'ss',
                    __.newStyleSheet(__.config.href),
                    3,
                    true
                ));

            return _;

        },

		/**
		 * Creates a new stylesheet <link> element.
		 * @param {string} href Href.
		 * @return {DOMElement} Viewport <meta> element.
		 */
        newStyleSheet: function (href) {

            var e = document.createElement('link');
            e.rel = 'stylesheet';
            e.type = 'text/css';
            e.href = href;

            return e;

        },

		/**
		 * Parses a CSS measurement string (eg. 960, '960px', '313.37em') and splits it into its numeric and unit parts.
		 * @param {string} x CSS measurement.
		 * @return {Array} Results, where element 0 = (float) numeric part, and 1 = (string) unit part.
		 */
        parseMeasurement: function (x) {

            var a, tmp;

            // Not a string? Just assume it's in px.
            if (typeof x !== 'string')
                a = [x, 'px'];

            // Fluid shortcut?
            else if (x == 'fluid')
                a = [100, '%'];

            // Okay, hard way it is ...
            else {

                var tmp;

                tmp = x.match(/([0-9\.]+)([^\s]*)/);

                // Missing units? Assume it's in px.
                if (tmp.length < 3 || !tmp[2])
                    a = [parseFloat(x), 'px'];

                // Otherwise, we have a winrar.
                else
                    a = [parseFloat(tmp[1]), tmp[2]];

            }

            return a;

        },

		/**
		 * State handler.
		 * @return {array} Attachments.
		 */
        stateHandler: function () {

            var config,
                attachments = [],
                a, i, x, id, s, s1, s2, C, Cu, R, Ru;

            // Generate state config.
            config = _.generateStateConfig(
                {
                    containers: __.config.containers,
                    grid: __.config.grid
                },
                __.config.breakpoints
            );

            // Expand gutters if it's not already an array.
            if (__.config.grid
                && 'gutters' in config.grid
                && !_.isArray(config.grid.gutters))
                config.grid.gutters = [config.grid.gutters, 0];

            // STYLE: Containers.
            if (__.config.containers) {

                var CLocked = false;

                // Split "containers" into width and units.
                a = __.parseMeasurement(config.containers);
                C = a[0];
                Cu = a[1];

                // Set id.
                id = 'sC-' + C + Cu;

                // Locked?
                if (Cu.substr(-1) == '!') {

                    CLocked = true;
                    Cu = Cu.substr(0, Cu.length - 1);

                }

                if (!(x = _.attachment(id))) {

                    x = _.newAttachment(
                        id,
                        _.newStyle(
                            '.container{margin-left:auto;margin-right:auto;width:' + (C * 1) + Cu +
                            (
                                CLocked
                                    ?
                                    '!important;' +
                                    'max-width:none!important;' +
                                    'min-width:0!important' +
                                    '}'
                                    :
                                    '}' +
                                    '.container.\\31 25\\25{width:100%;max-width:' + (C * 1.25) + Cu + ';min-width:' + C + Cu + '}' +
                                    '.container.\\37 5\\25{width:' + (C * 0.75) + Cu + '}' +
                                    '.container.\\35 0\\25{width:' + (C * 0.5) + Cu + '}' +
                                    '.container.\\32 5\\25{width:' + (C * 0.25) + Cu + '}'
                            )
                        ),
                        2
                    );

                }

                attachments.push(x);

            }

            // STYLE: Grid.
            if (__.config.grid) {

                // Gutters.
                id = 'sG-' + config.grid.gutters[0] + '-' + config.grid.gutters[1];

                if (!(x = _.attachment(id))) {

                    // Column gutters.

                    // Split into size and units.
                    a = __.parseMeasurement(config.grid.gutters[0]);
                    C = a[0];
                    Cu = a[1];

                    // Row gutters.

                    // Split into size and units.
                    a = __.parseMeasurement(config.grid.gutters[1]);
                    R = a[0];
                    Ru = a[1];

                    // Build attachment.
                    x = _.newAttachment(
                        id,
                        _.newStyle(

                            // Normal.
                            '.row>*{padding:' + (R * 1) + Ru + ' 0 0 ' + (C * 1) + Cu + '}' +
                            '.row{margin:' + (R * -1) + Ru + ' 0 -1px ' + (C * -1) + Cu + '}' +
                            '.row.uniform>*{padding:' + (C * 1) + Cu + ' 0 0 ' + (C * 1) + Cu + '}' +
                            '.row.uniform{margin:' + (C * -1) + Cu + ' 0 -1px ' + (C * -1) + Cu + '}' +

                            // 200%
                            '.row.\\32 00\\25>*{padding:' + (R * 2) + Ru + ' 0 0 ' + (C * 2) + Cu + '}' +
                            '.row.\\32 00\\25{margin:' + (R * -2) + Ru + ' 0 -1px ' + (C * -2) + Cu + '}' +
                            '.row.uniform.\\32 00\\25>*{padding:' + (C * 2) + Cu + ' 0 0 ' + (C * 2) + Cu + '}' +
                            '.row.uniform.\\32 00\\25{margin:' + (C * -2) + Cu + ' 0 -1px ' + (C * -2) + Cu + '}' +

                            // 150%
                            '.row.\\31 50\\25>*{padding:' + (R * 1.5) + Ru + ' 0 0 ' + (C * 1.5) + Cu + '}' +
                            '.row.\\31 50\\25{margin:' + (R * -1.5) + Ru + ' 0 -1px ' + (C * -1.5) + Cu + '}' +
                            '.row.uniform.\\31 50\\25>*{padding:' + (C * 1.5) + Cu + ' 0 0 ' + (C * 1.5) + Cu + '}' +
                            '.row.uniform.\\31 50\\25{margin:' + (C * -1.5) + Cu + ' 0 -1px ' + (C * -1.5) + Cu + '}' +

                            // 50%
                            '.row.\\35 0\\25>*{padding:' + (R * 0.5) + Ru + ' 0 0 ' + (C * 0.5) + Cu + '}' +
                            '.row.\\35 0\\25{margin:' + (R * -0.5) + Ru + ' 0 -1px ' + (C * -0.5) + Cu + '}' +
                            '.row.uniform.\\35 0\\25>*{padding:' + (C * 0.5) + Cu + ' 0 0 ' + (C * 0.5) + Cu + '}' +
                            '.row.uniform.\\35 0\\25{margin:' + (C * -0.5) + Cu + ' 0 -1px ' + (C * -0.5) + Cu + '}' +

                            // 25%
                            '.row.\\32 5\\25>*{padding:' + (R * 0.25) + Ru + ' 0 0 ' + (C * 0.25) + Cu + '}' +
                            '.row.\\32 5\\25{margin:' + (R * -0.25) + Ru + ' 0 -1px ' + (C * -0.25) + Cu + '}' +
                            '.row.uniform.\\32 5\\25>*{padding:' + (C * 0.25) + Cu + ' 0 0 ' + (C * 0.25) + Cu + '}' +
                            '.row.uniform.\\32 5\\25{margin:' + (C * -0.25) + Cu + ' 0 -1px ' + (C * -0.25) + Cu + '}' +

                            // 0%
                            '.row.\\30 \\25>*{padding:0}' +
                            '.row.\\30 \\25{margin:0 0 -1px 0}'

                        ),
                        3
                    );

                }

                attachments.push(x);

                // Responsive.
                if (config.grid.level > 1) {

                    id = 'sgR-' + config.grid.level;

                    if (!(x = _.attachment(id))) {

                        // Generate CSS.
                        s1 = '';

                        for (i = 2; i <= config.grid.level; i++)
                            s1 += __.css.gc('\\28 ' + __.gridLevelMap.k[i] + '\\29');

                        // Build attachment.
                        x = _.newAttachment(
                            id,
                            _.newStyle(s1),
                            4
                        );

                    }

                    attachments.push(x);

                }

            }

            // STYLE: Conditionals.
            if (__.config.conditionals) {

                id = 'sCd-' + _.stateId;

                if (!(x = _.attachment(id))) {

                    s1 = [];
                    s2 = [];

                    _.iterate(_.obj.breakpoints, function (k) {

                        if (_.indexOf(_.breakpointIds, k) !== -1)
                            s1.push('.not-' + k);
                        else
                            s2.push('.only-' + k);

                    });

                    s = (s1.length > 0 ? s1.join(',') + '{display:none!important}' : '') + (s2.length > 0 ? s2.join(',') + '{display:none!important}' : '');

                    x = _.newAttachment(
                        id,
                        _.newStyle(s.replace(/\.([0-9])/, '.\\3$1 ')),
                        5
                    );

                }

                attachments.push(x);

            }

            // STYLESHEETS: Per-breakpoint stylesheets.
            i = 6;
            a = _.breakpointIds;

            _.iterate(a, function (k) {

                if (a[k] in __.config.breakpoints
                    && __.config.breakpoints[a[k]].href) {

                    id = 'ss-' + a[k] + '-' + _.stateId;

                    if (!(x = _.attachment(id)))
                        x = _.newAttachment(
                            id,
                            __.newStyleSheet(__.config.breakpoints[a[k]].href),
                            i++
                        );

                    attachments.push(x);

                }

            });

            // Cache state config.
            __.stateConfigs[_.stateId] = config;

            return attachments;

        }

    }; _.layout = __.init;
})(skel);

/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    skel
        .breakpoints({
            xlarge: '(max-width: 1680px)',
            large: '(max-width: 1280px)',
            medium: '(max-width: 980px)',
            small: '(max-width: 736px)',
            xsmall: '(max-width: 480px)'
        });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#page-wrapper'),
            $banner = $('#banner'),
            $header = $('#header');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 250);
        });

        // Mobile?
        if (skel.vars.isMobile)
            $body.addClass('is-mobile');
        else
            skel
                .on('-medium !medium', function () {
                    $body.removeClass('is-mobile');
                })
                .on('+medium', function () {
                    $body.addClass('is-mobile');
                });

        // Scrolly.
        $('.scrolly')
            .scrolly({
                speed: 1500,
                offset: $header.outerHeight()
            });

        // Menu.
        var $menu = $('#menu'),
            $menuClose = $('<a class="close">').appendTo($menu),
            $menuToggle = $('.menuToggle');

        // Move to end of body.
        $menu
            .appendTo($body);

        // Close.
        $menuClose
            .on('click touchend', function (event) {

                event.preventDefault();
                event.stopPropagation();

                $body.removeClass('is-menu-visible');

            });

        // Toggle.
        $menuToggle
            .on('click touchend', function (event) {

                event.preventDefault();
                event.stopPropagation();

                $body.toggleClass('is-menu-visible');

            });

        // Wrapper.
        $wrapper
            .on('click touchend', function (event) {

                if ($body.hasClass('is-menu-visible')) {

                    event.preventDefault();
                    event.stopPropagation();

                    $body.removeClass('is-menu-visible');

                }

            });

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');
        
        if ($banner.length > 0 && $header.hasClass('alt')) {
            $window.on('resize', function () { $window.trigger('scroll'); });
            
            $banner.scrollex({
                bottom: $header.outerHeight() + 1,
                terminate: function () { $header.removeClass('alt'); },
                enter: function () { $header.addClass('alt'); },
                leave: function () { $header.removeClass('alt'); }
            });
            
        }

    });

})(jQuery);