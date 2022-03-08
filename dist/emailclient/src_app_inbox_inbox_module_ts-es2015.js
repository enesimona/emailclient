"use strict";
(self["webpackChunkangular_material_course"] = self["webpackChunkangular_material_course"] || []).push([["src_app_inbox_inbox_module_ts"],{

/***/ 52529:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICON_REGISTRY_PROVIDER": function() { return /* binding */ ICON_REGISTRY_PROVIDER; },
/* harmony export */   "ICON_REGISTRY_PROVIDER_FACTORY": function() { return /* binding */ ICON_REGISTRY_PROVIDER_FACTORY; },
/* harmony export */   "MAT_ICON_LOCATION": function() { return /* binding */ MAT_ICON_LOCATION; },
/* harmony export */   "MAT_ICON_LOCATION_FACTORY": function() { return /* binding */ MAT_ICON_LOCATION_FACTORY; },
/* harmony export */   "MatIcon": function() { return /* binding */ MatIcon; },
/* harmony export */   "MatIconModule": function() { return /* binding */ MatIconModule; },
/* harmony export */   "MatIconRegistry": function() { return /* binding */ MatIconRegistry; },
/* harmony export */   "getMatIconFailedToSanitizeLiteralError": function() { return /* binding */ getMatIconFailedToSanitizeLiteralError; },
/* harmony export */   "getMatIconFailedToSanitizeUrlError": function() { return /* binding */ getMatIconFailedToSanitizeUrlError; },
/* harmony export */   "getMatIconNameNotFoundError": function() { return /* binding */ getMatIconNameNotFoundError; },
/* harmony export */   "getMatIconNoHttpProviderError": function() { return /* binding */ getMatIconNoHttpProviderError; },
/* harmony export */   "ɵ0": function() { return /* binding */ ɵ0; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 42720);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 71435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 11355);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 71570);













/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */




const _c0 = ["*"];
function getMatIconNameNotFoundError(iconName) {
    return Error(`Unable to find icon with the name "${iconName}"`);
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */
function getMatIconNoHttpProviderError() {
    return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
        'Please include the HttpClientModule from @angular/common/http in your ' +
        'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */
function getMatIconFailedToSanitizeUrlError(url) {
    return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL ` +
        `via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */
function getMatIconFailedToSanitizeLiteralError(literal) {
    return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by ` +
        `Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */
class SvgIconConfig {
    constructor(url, svgText, options) {
        this.url = url;
        this.svgText = svgText;
        this.options = options;
    }
}
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
class MatIconRegistry {
    constructor(_httpClient, _sanitizer, document, _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /** Cache for icons loaded by direct URLs. */
        this._cachedIconsByUrl = new Map();
        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
        this._inProgressUrlFetches = new Map();
        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
        this._fontCssClassesByAlias = new Map();
        /** Registered icon resolver functions. */
        this._resolvers = [];
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
        this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIcon(iconName, url, options) {
        return this.addSvgIconInNamespace('', iconName, url, options);
    }
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    addSvgIconLiteral(iconName, literal, options) {
        return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
    }
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    addSvgIconInNamespace(namespace, iconName, url, options) {
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon resolver function with the registry. The function will be invoked with the
     * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
     * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
     * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
     * will be invoked in the order in which they have been registered.
     * @param resolver Resolver function to be registered.
     */
    addSvgIconResolver(resolver) {
        this._resolvers.push(resolver);
        return this;
    }
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal);
        // TODO: add an ngDevMode check
        if (!cleanLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */
    addSvgIconSet(url, options) {
        return this.addSvgIconSetInNamespace('', url, options);
    }
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @param literal SVG source of the icon set.
     */
    addSvgIconSetLiteral(literal, options) {
        return this.addSvgIconSetLiteralInNamespace('', literal, options);
    }
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */
    addSvgIconSetInNamespace(namespace, url, options) {
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
    }
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param literal SVG source of the icon set.
     */
    addSvgIconSetLiteralInNamespace(namespace, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal);
        if (!cleanLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
    }
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @param alias Alias for the font.
     * @param className Class name override to be used instead of the alias.
     */
    registerFontClassAlias(alias, className = alias) {
        this._fontCssClassesByAlias.set(alias, className);
        return this;
    }
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */
    classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    }
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @param className
     */
    setDefaultFontSetClass(className) {
        this._defaultFontSetClass = className;
        return this;
    }
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    getDefaultFontSetClass() {
        return this._defaultFontSetClass;
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    getSvgIconFromUrl(safeUrl) {
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        const cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svg => this._cachedIconsByUrl.set(url, svg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => cloneSvg(svg)));
    }
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    getNamedSvgIcon(name, namespace = '') {
        const key = iconKey(namespace, name);
        let config = this._svgIconConfigs.get(key);
        // Return (copy of) cached icon if possible.
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // Otherwise try to resolve the config from one of the resolver functions.
        config = this._getIconConfigFromResolvers(namespace, name);
        if (config) {
            this._svgIconConfigs.set(key, config);
            return this._getSvgFromConfig(config);
        }
        // See if we have any icon sets registered for the namespace.
        const iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(getMatIconNameNotFoundError(key));
    }
    ngOnDestroy() {
        this._resolvers = [];
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
    }
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    _getSvgFromConfig(config) {
        if (config.svgText) {
            // We already have the SVG element for this icon, return a copy.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(this._svgElementFromConfig(config)));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => cloneSvg(svg)));
        }
    }
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     */
    _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        const iconSetFetchRequests = iconSetConfigs
            .filter(iconSetConfig => !iconSetConfig.svgText)
            .map(iconSetConfig => {
            return this._loadSvgIconSetFromConfig(iconSetConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
                const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, iconSetConfig.url);
                // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.
                const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
                this._errorHandler.handleError(new Error(errorMessage));
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
            }));
        });
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(iconSetFetchRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
            const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            // TODO: add an ngDevMode check
            if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
            }
            return foundIcon;
        }));
    }
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
            const config = iconSetConfigs[i];
            // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
            // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
            // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
            // some of the parsing.
            if (config.svgText && config.svgText.indexOf(iconName) > -1) {
                const svg = this._svgElementFromConfig(config);
                const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    }
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    _loadSvgIconFromConfig(config) {
        return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svgText => config.svgText = svgText), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => this._svgElementFromConfig(config)));
    }
    /**
     * Loads the content of the icon set URL specified in the
     * SvgIconConfig and attaches it to the config.
     */
    _loadSvgIconSetFromConfig(config) {
        if (config.svgText) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
        }
        return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svgText => config.svgText = svgText));
    }
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    _extractSvgIconFromSet(iconSet, iconName, options) {
        // Use the `id="iconName"` syntax in order to escape special
        // characters in the ID (versus using the #iconName syntax).
        const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
        if (!iconSource) {
            return null;
        }
        // Clone the element and remove the ID to prevent multiple elements from being added
        // to the page with the same ID.
        const iconElement = iconSource.cloneNode(true);
        iconElement.removeAttribute('id');
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes(iconElement, options);
        }
        // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.
        if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        const svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
    }
    /**
     * Creates a DOM element from the given SVG string.
     */
    _svgElementFromString(str) {
        const div = this._document.createElement('DIV');
        div.innerHTML = str;
        const svg = div.querySelector('svg');
        // TODO: add an ngDevMode check
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    }
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */
    _toSvgElement(element) {
        const svg = this._svgElementFromString('<svg></svg>');
        const attributes = element.attributes;
        // Copy over all the attributes from the `symbol` to the new SVG, except the id.
        for (let i = 0; i < attributes.length; i++) {
            const { name, value } = attributes[i];
            if (name !== 'id') {
                svg.setAttribute(name, value);
            }
        }
        for (let i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[i].cloneNode(true));
            }
        }
        return svg;
    }
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    _setSvgAttributes(svg, options) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        if (options && options.viewBox) {
            svg.setAttribute('viewBox', options.viewBox);
        }
        return svg;
    }
    /**
     * Returns an Observable which produces the string contents of the given icon. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    _fetchIcon(iconConfig) {
        var _a;
        const { url: safeUrl, options } = iconConfig;
        const withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;
        if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
        }
        // TODO: add an ngDevMode check
        if (safeUrl == null) {
            throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl);
        // TODO: add an ngDevMode check
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        const inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        const req = this._httpClient.get(url, { responseType: 'text', withCredentials }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._inProgressUrlFetches.delete(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());
        this._inProgressUrlFetches.set(url, req);
        return req;
    }
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */
    _addSvgIconConfig(namespace, iconName, config) {
        this._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return this;
    }
    /**
     * Registers an icon set config in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param config Config to be registered.
     */
    _addSvgIconSetConfig(namespace, config) {
        const configNamespace = this._iconSetConfigs.get(namespace);
        if (configNamespace) {
            configNamespace.push(config);
        }
        else {
            this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
    }
    /** Parses a config's text into an SVG element. */
    _svgElementFromConfig(config) {
        if (!config.svgElement) {
            const svg = this._svgElementFromString(config.svgText);
            this._setSvgAttributes(svg, config.options);
            config.svgElement = svg;
        }
        return config.svgElement;
    }
    /** Tries to create an icon config through the registered resolver functions. */
    _getIconConfigFromResolvers(namespace, name) {
        for (let i = 0; i < this._resolvers.length; i++) {
            const result = this._resolvers[i](name, namespace);
            if (result) {
                return isSafeUrlWithOptions(result) ?
                    new SvgIconConfig(result.url, null, result.options) :
                    new SvgIconConfig(result, null);
            }
        }
        return undefined;
    }
}
MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) { return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler)); };
MatIconRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler)); }, token: MatIconRegistry, providedIn: "root" });
MatIconRegistry.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler }]; }, null); })();
/** @docs-private */
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
    return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/** @docs-private */
const ICON_REGISTRY_PROVIDER = {
    // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
    provide: MatIconRegistry,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatIconRegistry],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer,
        _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler,
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT],
    ],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
};
/** Clones an SVGElement while preserving type information. */
function cloneSvg(svg) {
    return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}
function isSafeUrlWithOptions(value) {
    return !!(value.url && value.options);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatIcon.
/** @docs-private */
const _MatIconBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinColor)(class {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
});
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */
const MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-icon-location', {
    providedIn: 'root',
    factory: MAT_ICON_LOCATION_FACTORY
});
/** @docs-private */
function MAT_ICON_LOCATION_FACTORY() {
    const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: () => _location ? (_location.pathname + _location.search) : ''
    };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */
const funcIriAttributes = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke'
];
const ɵ0 = attr => `[${attr}]`;
/** Selector that can be used to find all elements that are using a `FuncIRI`. */
const funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */
const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */
class MatIcon extends _MatIconBase {
    constructor(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
        super(elementRef);
        this._iconRegistry = _iconRegistry;
        this._location = _location;
        this._errorHandler = _errorHandler;
        this._inline = false;
        /** Subscription to the current in-progress SVG icon request. */
        this._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
        // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
    }
    /**
     * Whether the icon should be inlined, automatically sizing the icon to match the font size of
     * the element the icon is contained in.
     */
    get inline() {
        return this._inline;
    }
    set inline(inline) {
        this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(inline);
    }
    /** Name of the icon in the SVG icon set. */
    get svgIcon() { return this._svgIcon; }
    set svgIcon(value) {
        if (value !== this._svgIcon) {
            if (value) {
                this._updateSvgIcon(value);
            }
            else if (this._svgIcon) {
                this._clearSvgElement();
            }
            this._svgIcon = value;
        }
    }
    /** Font set that the icon is a part of. */
    get fontSet() { return this._fontSet; }
    set fontSet(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontSet) {
            this._fontSet = newValue;
            this._updateFontIconClasses();
        }
    }
    /** Name of an icon within a font set. */
    get fontIcon() { return this._fontIcon; }
    set fontIcon(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontIcon) {
            this._fontIcon = newValue;
            this._updateFontIconClasses();
        }
    }
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */
    _splitIconName(iconName) {
        if (!iconName) {
            return ['', ''];
        }
        const parts = iconName.split(':');
        switch (parts.length) {
            case 1: return ['', parts[0]]; // Use default namespace.
            case 2: return parts;
            default: throw Error(`Invalid icon name: "${iconName}"`); // TODO: add an ngDevMode check
        }
    }
    ngOnInit() {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
        this._updateFontIconClasses();
    }
    ngAfterViewChecked() {
        const cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && cachedElements.size) {
            const newPath = this._location.getPathname();
            // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.
            if (newPath !== this._previousPath) {
                this._previousPath = newPath;
                this._prependPathToReferences(newPath);
            }
        }
    }
    ngOnDestroy() {
        this._currentIconFetch.unsubscribe();
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
    }
    _usingFontIcon() {
        return !this.svgIcon;
    }
    _setSvgElement(svg) {
        this._clearSvgElement();
        // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
        // Do this before inserting the element into the DOM, in order to avoid a style recalculation.
        const styleTags = svg.querySelectorAll('style');
        for (let i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
        }
        // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.
        const path = this._location.getPathname();
        this._previousPath = path;
        this._cacheChildrenWithExternalReferences(svg);
        this._prependPathToReferences(path);
        this._elementRef.nativeElement.appendChild(svg);
    }
    _clearSvgElement() {
        const layoutElement = this._elementRef.nativeElement;
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
        // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.
        while (childCount--) {
            const child = layoutElement.childNodes[childCount];
            // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
            }
        }
    }
    _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
            return;
        }
        const elem = this._elementRef.nativeElement;
        const fontSetClass = this.fontSet ?
            this._iconRegistry.classNameForFontAlias(this.fontSet) :
            this._iconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
            }
            if (fontSetClass) {
                elem.classList.add(fontSetClass);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
            }
            if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    }
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     */
    _cleanupFontValue(value) {
        return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    }
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    _prependPathToReferences(path) {
        const elements = this._elementsWithExternalReferences;
        if (elements) {
            elements.forEach((attrs, element) => {
                attrs.forEach(attr => {
                    element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
                });
            });
        }
    }
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    _cacheChildrenWithExternalReferences(element) {
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        const elements = this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map();
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
            funcIriAttributes.forEach(attr => {
                const elementWithReference = elementsWithFuncIri[i];
                const value = elementWithReference.getAttribute(attr);
                const match = value ? value.match(funcIriPattern) : null;
                if (match) {
                    let attributes = elements.get(elementWithReference);
                    if (!attributes) {
                        attributes = [];
                        elements.set(elementWithReference, attributes);
                    }
                    attributes.push({ name: attr, value: match[1] });
                }
            });
        }
    }
    /** Sets a new SVG icon with a particular name. */
    _updateSvgIcon(rawName) {
        this._svgNamespace = null;
        this._svgName = null;
        this._currentIconFetch.unsubscribe();
        if (rawName) {
            const [namespace, iconName] = this._splitIconName(rawName);
            if (namespace) {
                this._svgNamespace = namespace;
            }
            if (iconName) {
                this._svgName = iconName;
            }
            this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1))
                .subscribe(svg => this._setSvgElement(svg), (err) => {
                const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
                this._errorHandler.handleError(new Error(errorMessage));
            });
        }
    }
}
MatIcon.ɵfac = function MatIcon_Factory(t) { return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler)); };
MatIcon.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatIcon, selectors: [["mat-icon"]], hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"], hostVars: 7, hostBindings: function MatIcon_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
    } }, inputs: { color: "color", inline: "inline", svgIcon: "svgIcon", fontSet: "fontSet", fontIcon: "fontIcon" }, exportAs: ["matIcon"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function MatIcon_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"], encapsulation: 2, changeDetection: 0 });
MatIcon.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: MatIconRegistry },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['aria-hidden',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [MAT_ICON_LOCATION,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler }
];
MatIcon.propDecorators = {
    inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    svgIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    fontSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    fontIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                template: '<ng-content></ng-content>',
                selector: 'mat-icon',
                exportAs: 'matIcon',
                inputs: ['color'],
                host: {
                    'role': 'img',
                    'class': 'mat-icon notranslate',
                    '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
                    '[attr.data-mat-icon-name]': '_svgName || fontIcon',
                    '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
                    '[class.mat-icon-inline]': 'inline',
                    '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: MatIconRegistry }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['aria-hidden']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [MAT_ICON_LOCATION]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler }]; }, { inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], svgIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], fontSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], fontIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatIconModule {
}
MatIconModule.ɵfac = function MatIconModule_Factory(t) { return new (t || MatIconModule)(); };
MatIconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatIconModule });
MatIconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
                exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
                declarations: [MatIcon]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatIconModule, { declarations: function () { return [MatIcon]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule]; }, exports: function () { return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 29734:
/*!**************************************************************!*\
  !*** ./src/app/inbox/email-create/email-create.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailCreateComponent": function() { return /* binding */ EmailCreateComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_create_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-create.component.html */ 51718);
/* harmony import */ var _email_create_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-create.component.css */ 27487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 50384);
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email.service */ 6062);






let EmailCreateComponent = class EmailCreateComponent {
    constructor(authService, emailService) {
        this.authService = authService;
        this.emailService = emailService;
        this.showModal = false;
        this.email = {
            id: '',
            to: '',
            subject: '',
            html: '',
            text: '',
            from: `${authService.username}@angular-email.com`
        };
    }
    ngOnInit() {
    }
    onSubmit(email) {
        //send the email off via the email service
        this.emailService.sendEmail(email).subscribe(() => {
            this.showModal = false;
        });
    }
};
EmailCreateComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _email_service__WEBPACK_IMPORTED_MODULE_3__.EmailService }
];
EmailCreateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-email-create',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_create_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_email_create_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailCreateComponent);



/***/ }),

/***/ 92369:
/*!**********************************************************!*\
  !*** ./src/app/inbox/email-form/email-form.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailFormComponent": function() { return /* binding */ EmailFormComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-form.component.html */ 48089);
/* harmony import */ var _email_form_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-form.component.css */ 8441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);





let EmailFormComponent = class EmailFormComponent {
    constructor() {
        this.emailSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        const { subject, from, to, text } = this.email;
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(to, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl({ value: from, disabled: true }),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(subject, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(text, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    onSubmit() {
        if (this.emailForm.invalid) {
            return;
        }
        this.emailSubmit.emit(this.emailForm.value);
    }
    onCancelAction() {
        var _a;
        (_a = this.emailForm) === null || _a === void 0 ? void 0 : _a.reset();
        this.onCancel.emit(true);
    }
};
EmailFormComponent.ctorParameters = () => [];
EmailFormComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    emailSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
EmailFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-email-form',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_email_form_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailFormComponent);



/***/ }),

/***/ 10619:
/*!************************************************************!*\
  !*** ./src/app/inbox/email-index/email-index.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailIndexComponent": function() { return /* binding */ EmailIndexComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_index_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-index.component.html */ 21586);
/* harmony import */ var _email_index_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-index.component.css */ 26756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email.service */ 6062);





let EmailIndexComponent = class EmailIndexComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.emails = [];
    }
    ngOnInit() {
        this.emailService.getEmails().subscribe((emails) => {
            this.emails = emails;
        });
    }
};
EmailIndexComponent.ctorParameters = () => [
    { type: _email_service__WEBPACK_IMPORTED_MODULE_2__.EmailService }
];
EmailIndexComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-email-index',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_index_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_email_index_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailIndexComponent);



/***/ }),

/***/ 45621:
/*!**************************************************************!*\
  !*** ./src/app/inbox/email-replay/email-replay.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailReplayComponent": function() { return /* binding */ EmailReplayComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_replay_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-replay.component.html */ 38664);
/* harmony import */ var _email_replay_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-replay.component.css */ 99330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email.service */ 6062);





let EmailReplayComponent = class EmailReplayComponent {
    constructor(emailService) {
        this.emailService = emailService;
        this.showModal = false;
    }
    ngOnChanges() {
        this.email = Object.assign(Object.assign({}, this.email), { from: this.email.to, to: this.email.from, subject: `RE: ${this.email.subject}`, text: `\n\n\n-------- ${this.email.from} wrote:\n> ${this.email.text.replace(/\n/gi, '\n> ')}` });
    }
    onSubmit(email) {
        this.emailService.sendEmail(email).subscribe(() => {
            this.showModal = false;
        });
    }
};
EmailReplayComponent.ctorParameters = () => [
    { type: _email_service__WEBPACK_IMPORTED_MODULE_2__.EmailService }
];
EmailReplayComponent.propDecorators = {
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
EmailReplayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-email-replay',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_replay_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_email_replay_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailReplayComponent);



/***/ }),

/***/ 29967:
/*!*************************************************!*\
  !*** ./src/app/inbox/email-resolver.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailResolverService": function() { return /* binding */ EmailResolverService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.service */ 6062);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8117);






let EmailResolverService = class EmailResolverService {
    constructor(emailService, router) {
        this.emailService = emailService;
        this.router = router;
    }
    resolve(route, state) {
        const { id } = route.params;
        return this.emailService.getEmail(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => {
            this.router.navigateByUrl('/inbox/not-found');
            return rxjs__WEBPACK_IMPORTED_MODULE_2__.EMPTY;
        }));
    }
};
EmailResolverService.ctorParameters = () => [
    { type: _email_service__WEBPACK_IMPORTED_MODULE_0__.EmailService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
EmailResolverService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], EmailResolverService);



/***/ }),

/***/ 82548:
/*!**********************************************************!*\
  !*** ./src/app/inbox/email-show/email-show.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailShowComponent": function() { return /* binding */ EmailShowComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_show_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./email-show.component.html */ 7360);
/* harmony import */ var _email_show_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-show.component.css */ 58922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





let EmailShowComponent = class EmailShowComponent {
    constructor(route) {
        this.route = route;
        this.email = this.route.snapshot.data.email;
        this.route.data.subscribe(({ email }) => {
            this.email = email;
        });
    }
    ngOnInit() {
    }
};
EmailShowComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
EmailShowComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-email-show',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_email_show_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_email_show_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmailShowComponent);



/***/ }),

/***/ 6062:
/*!****************************************!*\
  !*** ./src/app/inbox/email.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailService": function() { return /* binding */ EmailService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



let EmailService = class EmailService {
    constructor(http) {
        this.http = http;
        this.rootUrl = 'https://api.angular-email.com';
    }
    getEmails() {
        return this.http.get(`${this.rootUrl}/emails`);
    }
    getEmail(id) {
        return this.http.get(`${this.rootUrl}/emails/${id}`);
    }
    sendEmail(email) {
        return this.http.post(`${this.rootUrl}/emails`, email);
    }
};
EmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
EmailService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EmailService);



/***/ }),

/***/ 70859:
/*!**********************************************!*\
  !*** ./src/app/inbox/home/home.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 77506);
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css */ 98116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 52308:
/*!***********************************************!*\
  !*** ./src/app/inbox/inbox-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxRoutingModule": function() { return /* binding */ InboxRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _email_resolver_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-resolver.service */ 29967);
/* harmony import */ var _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-show/email-show.component */ 82548);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 70859);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ 97271);
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder/placeholder.component */ 37792);








const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        children: [
            { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__.NotFoundComponent },
            { path: ':id', component: _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_1__.EmailShowComponent,
                resolve: {
                    email: _email_resolver_service__WEBPACK_IMPORTED_MODULE_0__.EmailResolverService
                } },
            { path: '', component: _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_4__.PlaceholderComponent }
        ] }
];
let InboxRoutingModule = class InboxRoutingModule {
};
InboxRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], InboxRoutingModule);



/***/ }),

/***/ 9562:
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxModule": function() { return /* binding */ InboxModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox-routing.module */ 52308);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 70859);
/* harmony import */ var _email_create_email_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-create/email-create.component */ 29734);
/* harmony import */ var _email_replay_email_replay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-replay/email-replay.component */ 45621);
/* harmony import */ var _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-index/email-index.component */ 10619);
/* harmony import */ var _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-show/email-show.component */ 82548);
/* harmony import */ var _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placeholder/placeholder.component */ 37792);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ 97271);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email-form/email-form.component */ 92369);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 52529);
















let InboxModule = class InboxModule {
};
InboxModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _email_create_email_create_component__WEBPACK_IMPORTED_MODULE_2__.EmailCreateComponent, _email_replay_email_replay_component__WEBPACK_IMPORTED_MODULE_3__.EmailReplayComponent, _email_index_email_index_component__WEBPACK_IMPORTED_MODULE_4__.EmailIndexComponent, _email_show_email_show_component__WEBPACK_IMPORTED_MODULE_5__.EmailShowComponent, _placeholder_placeholder_component__WEBPACK_IMPORTED_MODULE_6__.PlaceholderComponent, _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent, _email_form_email_form_component__WEBPACK_IMPORTED_MODULE_9__.EmailFormComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _inbox_routing_module__WEBPACK_IMPORTED_MODULE_0__.InboxRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule
        ]
    })
], InboxModule);



/***/ }),

/***/ 97271:
/*!********************************************************!*\
  !*** ./src/app/inbox/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": function() { return /* binding */ NotFoundComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./not-found.component.html */ 25817);
/* harmony import */ var _not_found_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.css */ 43260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent.ctorParameters = () => [];
NotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-not-found',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_not_found_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotFoundComponent);



/***/ }),

/***/ 37792:
/*!************************************************************!*\
  !*** ./src/app/inbox/placeholder/placeholder.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceholderComponent": function() { return /* binding */ PlaceholderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_placeholder_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./placeholder.component.html */ 3513);
/* harmony import */ var _placeholder_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeholder.component.css */ 51710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




let PlaceholderComponent = class PlaceholderComponent {
    constructor() { }
    ngOnInit() {
    }
};
PlaceholderComponent.ctorParameters = () => [];
PlaceholderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-placeholder',
        template: _Users_enesimona30_Documents_angular_workspace_emailclient_node_modules_ngtools_webpack_src_loaders_direct_resource_js_placeholder_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_placeholder_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlaceholderComponent);



/***/ }),

/***/ 51718:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inbox/email-create/email-create.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-button color=\"primary\" class=\"compose-action\" (click)=\"showModal=true\">\n    <mat-icon>add_circle_outline</mat-icon>\n    Compose\n</button>\n\n<app-modal (dismiss)=\"showModal=false\" *ngIf=\"showModal\">\n    <h3 modalTitle>Compose</h3>\n    <app-email-form (emailSubmit)=\"onSubmit($event)\" (onCancel)=\"showModal=false\" [email]=\"email\"></app-email-form>\n</app-modal>");

/***/ }),

/***/ 48089:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inbox/email-form/email-form.component.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"emailForm\" class=\"ui form\" (ngSubmit)=\"onSubmit()\">\n   <app-input label=\"To\" inputType=\"email\" [control]=\"emailForm.get('to')\"></app-input>\n   <app-input label=\"From\" inputType=\"email\" [control]=\"emailForm.get('from')\"></app-input>\n   <app-input label=\"Subject\" inputType=\"text\" [control]=\"emailForm.get('subject')\"></app-input>\n   <app-input controlType=\"textarea\" label=\"Content\" [control]=\"emailForm.get('text')\"></app-input>\n    <div class=\"displayed-buttons\">\n        <button mat-stroked-button color=\"accent\" (click)=\"onCancelAction()\">Cancel</button>\n        <button mat-raised-button color=\"accent\">Send</button>\n    </div>\n</form>");

/***/ }),

/***/ 21586:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inbox/email-index/email-index.component.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui celled list\">\n    <div class=\"item\" *ngFor=\"let email of emails\">\n        <a [routerLink]=\"email.id\" routerLinkActive=\"active\">\n            <div class=\"content\">\n                <div class=\"header trim\">\n                    {{email.subject}}\n                </div>\n                <p class=\"trim\">\n                    {{email.from}}\n                </p>\n            </div>\n        </a>\n    </div>\n</div>");

/***/ }),

/***/ 38664:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inbox/email-replay/email-replay.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-raised-button color=\"accent\" (click)=\"showModal=true\">\n    Reply\n</button>\n\n<app-modal (dismiss)=\"showModal=false\" *ngIf=\"showModal\">\n    <h3 modalTitle>Reply</h3>\n    <app-email-form (emailSubmit)=\"onSubmit($event)\"  (onCancel)=\"showModal=false\" [email]=\"email\"></app-email-form>\n</app-modal>");

/***/ }),

/***/ 7360:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inbox/email-show/email-show.component.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div>\n        <h3>{{email.subject}}</h3>\n        <div>\n            From: <i>{{email.from}}</i>\n        </div>\n        <div>\n            To: <i>{{email.to}}</i>\n        </div>\n    </div>\n    <div><app-email-replay [email]=\"email\"></app-email-replay></div>\n</div>\n<div class=\"ui divider\">\n    <br>\n    <div [innerHTML]=\"email.html\">\n  \n    </div>\n</div>");

/***/ }),

/***/ 77506:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inbox/home/home.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui grid stackable\">\n    <div class=\"five wide column\">\n        <app-email-create></app-email-create>\n        <app-email-index></app-email-index>\n    </div>\n    <div class=\"eleven wide column\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n");

/***/ }),

/***/ 25817:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inbox/not-found/not-found.component.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui placeholder segment\">\n    <div class=\"ui icon header\">\n        <i class=\"search icon\"></i>\n        Email not found!\n    </div>\n</div>");

/***/ }),

/***/ 3513:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/inbox/placeholder/placeholder.component.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui placeholder segment\">\n    <div class=\"ui icon header\">\n        <i class=\"envelope outline icon\"></i>\n        Select an email to get started\n    </div>\n</div>");

/***/ }),

/***/ 27487:
/*!***************************************************************!*\
  !*** ./src/app/inbox/email-create/email-create.component.css ***!
  \***************************************************************/
/***/ (function(module) {

module.exports = ".compose-action{\n    margin-bottom:1rem;\n    width: 100%;\n    line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoiZW1haWwtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcG9zZS1hY3Rpb257XG4gICAgbWFyZ2luLWJvdHRvbToxcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 8441:
/*!***********************************************************!*\
  !*** ./src/app/inbox/email-form/email-form.component.css ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = ".displayed-buttons{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nbutton:first-of-type{\n    margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImVtYWlsLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5ZWQtYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ1dHRvbjpmaXJzdC1vZi10eXBle1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn0iXX0= */";

/***/ }),

/***/ 26756:
/*!*************************************************************!*\
  !*** ./src/app/inbox/email-index/email-index.component.css ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = ".item a{\n    color:black;\n    padding: 10px;\n}\n\na.active{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border-left: 5px solid #ff4081;\n}\n\n.content {\n    width:90%;\n}\n\n.trim {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZiIsImZpbGUiOiJlbWFpbC1pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0gYXtcbiAgICBjb2xvcjpibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5hLmFjdGl2ZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmNDA4MTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHdpZHRoOjkwJTtcbn1cblxuLnRyaW0ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */";

/***/ }),

/***/ 99330:
/*!***************************************************************!*\
  !*** ./src/app/inbox/email-replay/email-replay.component.css ***!
  \***************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1yZXBsYXkuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 58922:
/*!***********************************************************!*\
  !*** ./src/app/inbox/email-show/email-show.component.css ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = ".header{\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXNob3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTs7QUFFbkIiLCJmaWxlIjoiZW1haWwtc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbn0iXX0= */";

/***/ }),

/***/ 98116:
/*!***********************************************!*\
  !*** ./src/app/inbox/home/home.component.css ***!
  \***********************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 43260:
/*!*********************************************************!*\
  !*** ./src/app/inbox/not-found/not-found.component.css ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 51710:
/*!*************************************************************!*\
  !*** ./src/app/inbox/placeholder/placeholder.component.css ***!
  \*************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZWhvbGRlci5jb21wb25lbnQuY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_inbox_inbox_module_ts-es2015.js.map