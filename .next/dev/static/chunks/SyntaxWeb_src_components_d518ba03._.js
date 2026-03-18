(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/SyntaxWeb/src/components/animations/DecryptedText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecryptedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DecryptedText({ text, speed = 50, maxIterations = 10, sequential = false, revealDirection = 'start', useOriginalCharsOnly = false, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+', className = '', parentClassName = '', encryptedClassName = '', animateOn = 'hover', clickMode = 'once' }) {
    _s();
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [revealedIndices, setRevealedIndices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDecrypted, setIsDecrypted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(animateOn !== 'click');
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('forward');
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const orderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pointerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const availableChars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DecryptedText.useMemo[availableChars]": ()=>{
            return useOriginalCharsOnly ? Array.from(new Set(text.split(''))).filter({
                "DecryptedText.useMemo[availableChars]": (char)=>char !== ' '
            }["DecryptedText.useMemo[availableChars]"]) : characters.split('');
        }
    }["DecryptedText.useMemo[availableChars]"], [
        useOriginalCharsOnly,
        text,
        characters
    ]);
    const shuffleText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DecryptedText.useCallback[shuffleText]": (originalText, currentRevealed)=>{
            return originalText.split('').map({
                "DecryptedText.useCallback[shuffleText]": (char, i)=>{
                    if (char === ' ') return ' ';
                    if (currentRevealed.has(i)) return originalText[i];
                    return availableChars[Math.floor(Math.random() * availableChars.length)];
                }
            }["DecryptedText.useCallback[shuffleText]"]).join('');
        }
    }["DecryptedText.useCallback[shuffleText]"], [
        availableChars
    ]);
    const computeOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DecryptedText.useCallback[computeOrder]": (len)=>{
            const order = [];
            if (len <= 0) return order;
            if (revealDirection === 'start') {
                for(let i = 0; i < len; i++)order.push(i);
                return order;
            }
            if (revealDirection === 'end') {
                for(let i = len - 1; i >= 0; i--)order.push(i);
                return order;
            }
            // center
            const middle = Math.floor(len / 2);
            let offset = 0;
            while(order.length < len){
                if (offset % 2 === 0) {
                    const idx = middle + offset / 2;
                    if (idx >= 0 && idx < len) order.push(idx);
                } else {
                    const idx = middle - Math.ceil(offset / 2);
                    if (idx >= 0 && idx < len) order.push(idx);
                }
                offset++;
            }
            return order.slice(0, len);
        }
    }["DecryptedText.useCallback[computeOrder]"], [
        revealDirection
    ]);
    const fillAllIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DecryptedText.useCallback[fillAllIndices]": ()=>{
            const s = new Set();
            for(let i = 0; i < text.length; i++)s.add(i);
            return s;
        }
    }["DecryptedText.useCallback[fillAllIndices]"], [
        text
    ]);
    const removeRandomIndices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DecryptedText.useCallback[removeRandomIndices]": (set, count)=>{
            const arr = Array.from(set);
            for(let i = 0; i < count && arr.length > 0; i++){
                const idx = Math.floor(Math.random() * arr.length);
                arr.splice(idx, 1);
            }
            return new Set(arr);
        }
    }["DecryptedText.useCallback[removeRandomIndices]"], []);
    const encryptInstantly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DecryptedText.useCallback[encryptInstantly]": ()=>{
            const emptySet = new Set();
            setRevealedIndices(emptySet);
            setDisplayText(shuffleText(text, emptySet));
            setIsDecrypted(false);
        }
    }["DecryptedText.useCallback[encryptInstantly]"], [
        text,
        shuffleText
    ]);
    const triggerDecrypt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DecryptedText.useCallback[triggerDecrypt]": ()=>{
            if (sequential) {
                orderRef.current = computeOrder(text.length);
                pointerRef.current = 0;
                setRevealedIndices(new Set());
            } else {
                setRevealedIndices(new Set());
            }
            setDirection('forward');
            setIsAnimating(true);
        }
    }["DecryptedText.useCallback[triggerDecrypt]"], [
        sequential,
        computeOrder,
        text.length
    ]);
    const triggerReverse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DecryptedText.useCallback[triggerReverse]": ()=>{
            if (sequential) {
                orderRef.current = computeOrder(text.length).slice().reverse();
                pointerRef.current = 0;
                setRevealedIndices(fillAllIndices());
                setDisplayText(shuffleText(text, fillAllIndices()));
            } else {
                setRevealedIndices(fillAllIndices());
                setDisplayText(shuffleText(text, fillAllIndices()));
            }
            setDirection('reverse');
            setIsAnimating(true);
        }
    }["DecryptedText.useCallback[triggerReverse]"], [
        sequential,
        computeOrder,
        fillAllIndices,
        shuffleText,
        text
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecryptedText.useEffect": ()=>{
            if (!isAnimating) return;
            let interval;
            let currentIteration = 0;
            const getNextIndex = {
                "DecryptedText.useEffect.getNextIndex": (revealedSet)=>{
                    const textLength = text.length;
                    switch(revealDirection){
                        case 'start':
                            return revealedSet.size;
                        case 'end':
                            return textLength - 1 - revealedSet.size;
                        case 'center':
                            {
                                const middle = Math.floor(textLength / 2);
                                const offset = Math.floor(revealedSet.size / 2);
                                const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
                                if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                                    return nextIndex;
                                }
                                for(let i = 0; i < textLength; i++){
                                    if (!revealedSet.has(i)) return i;
                                }
                                return 0;
                            }
                        default:
                            return revealedSet.size;
                    }
                }
            }["DecryptedText.useEffect.getNextIndex"];
            interval = setInterval({
                "DecryptedText.useEffect": ()=>{
                    setRevealedIndices({
                        "DecryptedText.useEffect": (prevRevealed)=>{
                            if (sequential) {
                                if (direction === 'forward') {
                                    if (prevRevealed.size < text.length) {
                                        const nextIndex = getNextIndex(prevRevealed);
                                        const newRevealed = new Set(prevRevealed);
                                        newRevealed.add(nextIndex);
                                        setDisplayText(shuffleText(text, newRevealed));
                                        return newRevealed;
                                    } else {
                                        clearInterval(interval);
                                        setIsAnimating(false);
                                        setIsDecrypted(true);
                                        return prevRevealed;
                                    }
                                }
                                if (direction === 'reverse') {
                                    if (pointerRef.current < orderRef.current.length) {
                                        const idxToRemove = orderRef.current[pointerRef.current++];
                                        const newRevealed = new Set(prevRevealed);
                                        newRevealed.delete(idxToRemove);
                                        setDisplayText(shuffleText(text, newRevealed));
                                        if (newRevealed.size === 0) {
                                            clearInterval(interval);
                                            setIsAnimating(false);
                                            setIsDecrypted(false);
                                        }
                                        return newRevealed;
                                    } else {
                                        clearInterval(interval);
                                        setIsAnimating(false);
                                        setIsDecrypted(false);
                                        return prevRevealed;
                                    }
                                }
                            } else {
                                if (direction === 'forward') {
                                    setDisplayText(shuffleText(text, prevRevealed));
                                    currentIteration++;
                                    if (currentIteration >= maxIterations) {
                                        clearInterval(interval);
                                        setIsAnimating(false);
                                        setDisplayText(text);
                                        setIsDecrypted(true);
                                    }
                                    return prevRevealed;
                                }
                                if (direction === 'reverse') {
                                    let currentSet = prevRevealed;
                                    if (currentSet.size === 0) {
                                        currentSet = fillAllIndices();
                                    }
                                    const removeCount = Math.max(1, Math.ceil(text.length / Math.max(1, maxIterations)));
                                    const nextSet = removeRandomIndices(currentSet, removeCount);
                                    setDisplayText(shuffleText(text, nextSet));
                                    currentIteration++;
                                    if (nextSet.size === 0 || currentIteration >= maxIterations) {
                                        clearInterval(interval);
                                        setIsAnimating(false);
                                        setIsDecrypted(false);
                                        setDisplayText(shuffleText(text, new Set()));
                                        return new Set();
                                    }
                                    return nextSet;
                                }
                            }
                            return prevRevealed;
                        }
                    }["DecryptedText.useEffect"]);
                }
            }["DecryptedText.useEffect"], speed);
            return ({
                "DecryptedText.useEffect": ()=>clearInterval(interval)
            })["DecryptedText.useEffect"];
        }
    }["DecryptedText.useEffect"], [
        isAnimating,
        text,
        speed,
        maxIterations,
        sequential,
        revealDirection,
        shuffleText,
        direction,
        fillAllIndices,
        removeRandomIndices,
        characters,
        useOriginalCharsOnly
    ]);
    const handleClick = ()=>{
        if (animateOn !== 'click') return;
        if (clickMode === 'once') {
            if (isDecrypted) return;
            setDirection('forward');
            triggerDecrypt();
        }
        if (clickMode === 'toggle') {
            if (isDecrypted) {
                triggerReverse();
            } else {
                setDirection('forward');
                triggerDecrypt();
            }
        }
    };
    const triggerHoverDecrypt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DecryptedText.useCallback[triggerHoverDecrypt]": ()=>{
            if (isAnimating) return;
            setRevealedIndices(new Set());
            setIsDecrypted(false);
            setDisplayText(text);
            setDirection('forward');
            setIsAnimating(true);
        }
    }["DecryptedText.useCallback[triggerHoverDecrypt]"], [
        isAnimating,
        text
    ]);
    const resetToPlainText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DecryptedText.useCallback[resetToPlainText]": ()=>{
            setIsAnimating(false);
            setRevealedIndices(new Set());
            setDisplayText(text);
            setIsDecrypted(true);
            setDirection('forward');
        }
    }["DecryptedText.useCallback[resetToPlainText]"], [
        text
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecryptedText.useEffect": ()=>{
            if (animateOn !== 'view' && animateOn !== 'inViewHover') return;
            const observerCallback = {
                "DecryptedText.useEffect.observerCallback": (entries)=>{
                    entries.forEach({
                        "DecryptedText.useEffect.observerCallback": (entry)=>{
                            if (entry.isIntersecting && !hasAnimated) {
                                triggerDecrypt();
                                setHasAnimated(true);
                            }
                        }
                    }["DecryptedText.useEffect.observerCallback"]);
                }
            }["DecryptedText.useEffect.observerCallback"];
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            const observer = new IntersectionObserver(observerCallback, observerOptions);
            const currentRef = containerRef.current;
            if (currentRef) {
                observer.observe(currentRef);
            }
            return ({
                "DecryptedText.useEffect": ()=>{
                    if (currentRef) observer.unobserve(currentRef);
                }
            })["DecryptedText.useEffect"];
        }
    }["DecryptedText.useEffect"], [
        animateOn,
        hasAnimated,
        triggerDecrypt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecryptedText.useEffect": ()=>{
            if (animateOn === 'click') {
                encryptInstantly();
            } else {
                setDisplayText(text);
                setIsDecrypted(true);
            }
            setRevealedIndices(new Set());
            setDirection('forward');
        }
    }["DecryptedText.useEffect"], [
        animateOn,
        text,
        encryptInstantly
    ]);
    const animateProps = animateOn === 'hover' || animateOn === 'inViewHover' ? {
        onMouseEnter: triggerHoverDecrypt,
        onMouseLeave: resetToPlainText
    } : animateOn === 'click' ? {
        onClick: handleClick
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        ref: containerRef,
        className: `inline-block whitespace-pre-wrap ${parentClassName}`,
        ...animateProps,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: displayText
            }, void 0, false, {
                fileName: "[project]/SyntaxWeb/src/components/animations/DecryptedText.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: displayText.split('').map((char, index)=>{
                    const isRevealedOrDone = revealedIndices.has(index) || !isAnimating && isDecrypted;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: isRevealedOrDone ? className : encryptedClassName,
                        children: char
                    }, index, false, {
                        fileName: "[project]/SyntaxWeb/src/components/animations/DecryptedText.tsx",
                        lineNumber: 365,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/SyntaxWeb/src/components/animations/DecryptedText.tsx",
                lineNumber: 360,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/SyntaxWeb/src/components/animations/DecryptedText.tsx",
        lineNumber: 353,
        columnNumber: 5
    }, this);
}
_s(DecryptedText, "4DPi8HF1wKIMTvOXWQqlasN3wvo=");
_c = DecryptedText;
var _c;
__turbopack_context__.k.register(_c, "DecryptedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SyntaxWeb/src/components/ui/Galaxy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Galaxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/ogl/src/math/Color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;
const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;
uniform bool uMouseAttraction;
uniform float uAttractionStrength;
uniform bool uInverted;

varying vec2 vUv;

uniform float uNumLayers;
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float tri(float x) {
  return abs(fract(x) * 2.0 - 1.0);
}

float tris(float x) {
  float t = fract(x);
  return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
}

float trisn(float x) {
  float t = fract(x);
  return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}

vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);

  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);

  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;

      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));

      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;

      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;

      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;
      
      col += star * size * color;
    }
  }

  return col;
}


void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;

  vec2 mouseNorm = uMouse - vec2(0.5);
  vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
  uv += mouseOffset; // Global Parallax for all stars

  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } 
  
  // Interaction (Attraction / Repulsion)
  vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
  float mouseDist = length(uv - mousePosUV);

  if (uMouseAttraction) {
    // Black Hole Suction: Pulls stars towards the mouse
    vec2 dirAway = uv - mousePosUV;
    float d = length(dirAway);
    // Exponential suction force
    float force = (uAttractionStrength * 0.05) / (d + 0.2);
    force = min(force, 1.2); // Cap the distortion
    uv += dirAway * force * uMouseActiveFactor;
  } else if (uMouseRepulsion) {
    float invDist = 1.0 / (mouseDist + 0.15);
    float force = (uRepulsionStrength * 0.1) * invDist;
    vec2 repulsion = normalize(uv - mousePosUV) * force;
    uv += repulsion * uMouseActiveFactor;
  }

  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;

  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;

  vec3 col = vec3(0.0);

  for (float i = 0.0; i < 1.0; i += 0.2) {
    if (i >= uNumLayers * 0.2) break;
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.8, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }

  if (uTransparent) {
    float alpha = clamp(length(col) * 2.0, 0.0, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;
function Galaxy({ focal = [
    0.5,
    0.5
], rotation = [
    1.0,
    0.0
], starSpeed = 0.5, density = 1, hueShift = 140, disableAnimation = false, speed = 1.0, mouseInteraction = true, glowIntensity = 0.3, saturation = 0.0, mouseRepulsion = true, repulsionStrength = 2, mouseAttraction = false, attractionStrength = 3, twinkleIntensity = 0.3, rotationSpeed = 0.1, autoCenterRepulsion = 0, transparent = true, inverted = false, numLayers = 3, ...rest }) {
    _s();
    const ctnDom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const targetMousePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const smoothMousePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const targetMouseActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0.0);
    const smoothMouseActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0.0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Galaxy.useEffect": ()=>{
            if (!ctnDom.current) return;
            const ctn = ctnDom.current;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                alpha: transparent,
                premultipliedAlpha: false
            });
            const gl = renderer.gl;
            if (transparent) {
                gl.enable(gl.BLEND);
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
                gl.clearColor(0, 0, 0, 0);
            } else {
                gl.clearColor(0, 0, 0, 1);
            }
            let program;
            function resize() {
                const scale = 1;
                renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
                if (program) {
                    program.uniforms.uResolution.value = new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height);
                }
            }
            window.addEventListener('resize', resize, false);
            resize();
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            program = new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: vertexShader,
                fragment: fragmentShader,
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uResolution: {
                        value: new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$math$2f$Color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height)
                    },
                    uFocal: {
                        value: new Float32Array(focal)
                    },
                    uRotation: {
                        value: new Float32Array(rotation)
                    },
                    uStarSpeed: {
                        value: starSpeed
                    },
                    uDensity: {
                        value: density
                    },
                    uHueShift: {
                        value: hueShift
                    },
                    uSpeed: {
                        value: speed
                    },
                    uMouse: {
                        value: new Float32Array([
                            smoothMousePos.current.x,
                            smoothMousePos.current.y
                        ])
                    },
                    uGlowIntensity: {
                        value: glowIntensity
                    },
                    uSaturation: {
                        value: saturation
                    },
                    uMouseRepulsion: {
                        value: mouseRepulsion
                    },
                    uTwinkleIntensity: {
                        value: twinkleIntensity
                    },
                    uRotationSpeed: {
                        value: rotationSpeed
                    },
                    uRepulsionStrength: {
                        value: repulsionStrength
                    },
                    uMouseAttraction: {
                        value: mouseAttraction
                    },
                    uAttractionStrength: {
                        value: attractionStrength
                    },
                    uMouseActiveFactor: {
                        value: 0.0
                    },
                    uAutoCenterRepulsion: {
                        value: autoCenterRepulsion
                    },
                    uTransparent: {
                        value: transparent
                    },
                    uInverted: {
                        value: inverted
                    },
                    uNumLayers: {
                        value: numLayers
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            const animateIdRef = {
                current: 0
            };
            let isVisible = true;
            const observer = new IntersectionObserver({
                "Galaxy.useEffect": ([entry])=>{
                    isVisible = entry.isIntersecting;
                }
            }["Galaxy.useEffect"], {
                threshold: 0.1
            });
            observer.observe(ctn);
            function update(t) {
                animateIdRef.current = requestAnimationFrame(update);
                if (!isVisible) return;
                if (!disableAnimation) {
                    program.uniforms.uTime.value = t * 0.001;
                    program.uniforms.uStarSpeed.value = t * 0.001 * starSpeed / 10.0;
                }
                const lerpFactor = 0.05;
                const activeLerpFactor = 0.15; // Snappier attraction boot-up
                smoothMousePos.current.x += (targetMousePos.current.x - smoothMousePos.current.x) * lerpFactor;
                smoothMousePos.current.y += (targetMousePos.current.y - smoothMousePos.current.y) * lerpFactor;
                smoothMouseActive.current += (targetMouseActive.current - smoothMouseActive.current) * activeLerpFactor;
                program.uniforms.uMouse.value[0] = smoothMousePos.current.x;
                program.uniforms.uMouse.value[1] = smoothMousePos.current.y;
                program.uniforms.uMouseActiveFactor.value = smoothMouseActive.current;
                renderer.render({
                    scene: mesh
                });
            }
            animateIdRef.current = requestAnimationFrame(update);
            ctn.appendChild(gl.canvas);
            function handleMouseMove(e) {
                if (!ctn) return;
                const rect = ctn.getBoundingClientRect();
                // Use window coordinates but map to container space
                const x = (e.clientX - rect.left) / rect.width;
                const y = 1.0 - (e.clientY - rect.top) / rect.height;
                targetMousePos.current = {
                    x,
                    y
                };
                targetMouseActive.current = 1.0;
            }
            if (mouseInteraction) {
                window.addEventListener('mousemove', handleMouseMove);
            }
            return ({
                "Galaxy.useEffect": ()=>{
                    cancelAnimationFrame(animateIdRef.current);
                    observer.disconnect();
                    window.removeEventListener('resize', resize);
                    if (mouseInteraction) {
                        window.removeEventListener('mousemove', handleMouseMove);
                    }
                    if (ctn.contains(gl.canvas)) {
                        ctn.removeChild(gl.canvas);
                    }
                    gl.getExtension('WEBGL_lose_context')?.loseContext();
                }
            })["Galaxy.useEffect"];
        }
    }["Galaxy.useEffect"], [
        focal,
        rotation,
        starSpeed,
        density,
        hueShift,
        disableAnimation,
        speed,
        mouseInteraction,
        glowIntensity,
        saturation,
        mouseRepulsion,
        twinkleIntensity,
        rotationSpeed,
        repulsionStrength,
        mouseAttraction,
        attractionStrength,
        autoCenterRepulsion,
        transparent,
        inverted,
        numLayers
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ctnDom,
        className: "w-full h-full relative",
        ...rest
    }, void 0, false, {
        fileName: "[project]/SyntaxWeb/src/components/ui/Galaxy.tsx",
        lineNumber: 393,
        columnNumber: 10
    }, this);
}
_s(Galaxy, "3hfPn9KsixpKjSh0FStiZteKbyU=");
_c = Galaxy;
var _c;
__turbopack_context__.k.register(_c, "Galaxy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SyntaxWeb/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$DecryptedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/components/animations/DecryptedText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$ui$2f$Galaxy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/components/ui/Galaxy.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const HeroScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SyntaxWeb/src/components/ui/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/SyntaxWeb/src/components/ui/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = HeroScene;
function Hero() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const containerVariants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        initial: {
            y: "110%",
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative w-full h-screen flex items-center justify-center overflow-hidden bg-background transition-colors duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 opacity-10 dark:opacity-40 transition-opacity duration-1000",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$ui$2f$Galaxy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    mouseAttraction: true,
                    mouseRepulsion: false,
                    attractionStrength: 5,
                    mouseInteraction: true,
                    density: 1.0,
                    speed: 0.3,
                    transparent: true,
                    hueShift: 180,
                    numLayers: 2
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-[#22D3EE]/[0.03] blur-[100px] rounded-full pointer-events-none z-[1]"
            }, void 0, false, {
                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 inset-y-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.9,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        duration: 1.5,
                        ease: "circOut"
                    },
                    className: "w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroScene, {}, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 relative z-20 w-full pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "initial",
                        whileInView: "animate",
                        viewport: {
                            once: true
                        },
                        className: "relative flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full flex items-center justify-center min-h-[30vh] md:min-h-[45vh]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[22vw] md:text-[20vw] font-bold text-foreground tracking-tight uppercase font-['Teko'] leading-none relative z-10 select-none pointer-events-none drop-shadow-[0_2px_15px_rgba(34,211,238,0.15)] dark:drop-shadow-[0_2px_15px_rgba(255,255,255,0.05)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$DecryptedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        text: "SYNTAX",
                                        animateOn: "view",
                                        revealDirection: "center",
                                        speed: 40,
                                        className: "text-foreground",
                                        encryptedClassName: "text-brand-cyan/20",
                                        sequential: true
                                    }, void 0, false, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                className: "flex flex-col items-center gap-8 mt-6 md:mt-10 z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center max-w-lg text-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    width: 0
                                                },
                                                animate: {
                                                    width: 30
                                                },
                                                className: "h-[1px] bg-[#22D3EE]"
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] md:text-sm font-bold text-foreground opacity-80 uppercase tracking-[0.4em] leading-relaxed",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$DecryptedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    text: "Mengubah konsep berani menjadi inovasi digital",
                                                    animateOn: "view",
                                                    speed: 40
                                                }, void 0, false, {
                                                    fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: "#portfolio",
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        className: "group cursor-pointer flex items-center gap-5 py-4 px-9 border border-black/20 hover:border-[#22D3EE] transition-all duration-500 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 rounded-sm overflow-hidden relative pointer-events-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-black group-hover:text-white relative z-10 transition-colors duration-300",
                                                children: "Lihat Karya"
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                                lineNumber: 119,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 14,
                                                className: "text-black group-hover:text-[#22D3EE] group-hover:translate-x-1 relative z-10 transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1.5,
                            duration: 1
                        },
                        className: "absolute bottom-10 left-6 hidden md:flex flex-col items-center gap-6 z-20 pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] font-bold uppercase tracking-[0.5em] text-foreground/40 [writing-mode:vertical-lr]",
                                children: "EXPLORE"
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    scaleY: [
                                        0,
                                        1,
                                        0
                                    ],
                                    originY: [
                                        0,
                                        0,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                className: "w-[1px] h-12 bg-foreground/20"
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/SyntaxWeb/src/components/sections/Hero.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Hero, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroScene");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SyntaxWeb/src/components/animations/SplitText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplitText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function SplitText({ text, className = '', delay = 0.05 }) {
    const words = text.split(' ');
    const container = {
        hidden: {
            opacity: 0
        },
        visible: (i = 1)=>({
                opacity: 1,
                transition: {
                    staggerChildren: delay,
                    delayChildren: 0.04 * i
                }
            })
    };
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        style: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        variants: container,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true
        },
        className: className,
        children: words.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                variants: child,
                style: {
                    marginRight: '0.25em'
                },
                children: word
            }, index, false, {
                fileName: "[project]/SyntaxWeb/src/components/animations/SplitText.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/SyntaxWeb/src/components/animations/SplitText.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = SplitText;
var _c;
__turbopack_context__.k.register(_c, "SplitText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SyntaxWeb/src/components/sections/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/components/animations/SplitText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Services() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const services = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
            title: t.services.list.web.title,
            desc: t.services.list.web.desc
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
            title: t.services.list.responsive.title,
            desc: t.services.list.responsive.desc
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"],
            title: t.services.list.design.title,
            desc: t.services.list.design.desc
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
            title: t.services.list.performance.title,
            desc: t.services.list.performance.desc
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
            title: t.services.list.security.title,
            desc: t.services.list.security.desc
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
            title: t.services.list.intelligent.title,
            desc: t.services.list.intelligent.desc
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "min-h-screen py-20 lg:py-32 bg-transparent relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 relative z-10 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20 md:mb-32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-5xl md:text-9xl font-black text-foreground tracking-tighter uppercase font-['Teko'] leading-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        text: t.services.title,
                                        className: "text-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        text: t.services.subtitle,
                                        className: "text-foreground/10"
                                    }, void 0, false, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 1,
                                delay: 0.2
                            },
                            viewport: {
                                once: true
                            },
                            className: "text-foreground/60 text-base md:text-lg max-w-sm font-medium tracking-tight leading-relaxed",
                            children: t.services.description
                        }, void 0, false, {
                            fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-12 md:gap-y-24",
                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: index * 0.1
                            },
                            viewport: {
                                once: true
                            },
                            className: "group relative flex flex-col items-start gap-4 md:gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 md:w-14 md:h-14 border border-border flex items-center justify-center text-foreground bg-foreground/[0.03] group-hover:bg-[#22D3EE] group-hover:text-black group-hover:border-[#22D3EE] transition-all duration-500 rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                        size: 20,
                                        strokeWidth: 1.5,
                                        className: "md:w-7 md:h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 md:space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg md:text-2xl font-black text-foreground uppercase tracking-tighter font-['Teko'] group-hover:text-[#22D3EE] transition-colors leading-tight",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-foreground/60 text-[10px] md:text-sm font-medium leading-relaxed max-w-full",
                                            children: service.desc
                                        }, void 0, false, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex items-center gap-2 text-[10px] font-black text-[#22D3EE] uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300",
                                            children: [
                                                "Pelajari Lebih Lanjut ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    size: 10,
                                                    className: "fill-[#22D3EE]"
                                                }, void 0, false, {
                                                    fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 -right-2 text-6xl font-black text-foreground/[0.03] group-hover:text-[#22D3EE]/10 transition-colors uppercase font-['Teko']",
                                    children: [
                                        "0",
                                        index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/SyntaxWeb/src/components/sections/Services.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Services, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SyntaxWeb/src/components/sections/Portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$satellite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Satellite$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/satellite.js [app-client] (ecmascript) <export default as Satellite>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const PROJECTS = [
    {
        id: 1,
        title: 'MAHAPENA',
        category: 'ORGANIZATION',
        image: '/portfolio/mahapena.feb.unej.ac.id_.jpg',
        description: 'Unit Kegiatan Mahasiswa Pecinta Alam FEB Universitas Jember platform.',
        tech: [
            'Next.js',
            'Tailwind',
            'High Performance'
        ],
        link: 'https://mahapena.feb.unej.ac.id/',
        problem: 'Fragmented community communication and lack of digital presence for nature enthusiasts.',
        impact: 'Established a centralized hub that increased member engagement by 40% and simplified information sharing.'
    },
    {
        id: 2,
        title: 'HMRPM',
        category: 'TECHNOLOGY',
        image: '/portfolio/hmrpmunej.id_.jpg',
        description: 'Mechanical Engineering Student Association digital hub.',
        tech: [
            'React',
            'Node.js',
            'Architecture'
        ],
        link: 'https://hmrpmunej.id/',
        problem: 'Manual academic documentation and inefficient communication between mechanical engineering students.',
        impact: 'Automated 70% of administrative tasks and created a unified platform for over 500 active students.'
    },
    {
        id: 3,
        title: 'BALIKKUCING',
        category: 'CREATIVE AGENCY',
        image: '/portfolio/balikkucingstudio.com_.jpg',
        description: 'Fresh visual identity and creative agency platform.',
        tech: [
            'Brand Design',
            'UI/UX',
            'Innovation'
        ],
        link: 'https://balikkucingstudio.com/',
        problem: 'Traditional agency branding that failed to capture the high-tech, futuristic vision of the studio.',
        impact: 'Redesigned the entire digital identity, leading to a 200% increase in international inquiries.'
    },
    {
        id: 4,
        title: 'AF STUDIO',
        category: 'PHOTOGRAPHY',
        image: '/portfolio/afstudio.my.id_.jpg',
        description: 'Professional photography studio landing page.',
        tech: [
            'Elegance',
            'Visual Arts',
            'Portfolio'
        ],
        link: 'https://afstudio.my.id/',
        problem: 'Ineffective portfolio display and low client conversion rates for luxury photography services.',
        impact: 'Created a high-impact visual gallery that improved appointment booking rates by 50%.'
    },
    {
        id: 5,
        title: 'STRATEGIX',
        category: 'AI SYSTEM',
        image: '/portfolio/strategix.grapadikonsultan.co.id_.jpg',
        description: 'Intelligent business management with AI SWORT analysis.',
        tech: [
            'AI Engine',
            'Next.js',
            'Analytics'
        ],
        link: 'https://strategix.grapadikonsultan.co.id/',
        problem: 'Complex and time-consuming manual SWOT analysis for small to medium enterprise consultants.',
        impact: 'Developed an AI-driven engine that generates strategic reports in seconds instead of hours.'
    },
    {
        id: 6,
        title: 'SUGOI 8',
        category: 'EVENT MGT',
        image: '/portfolio/sugoi8management.com_.jpg',
        description: 'Event management agency profile and digital solutions.',
        tech: [
            'Event Core',
            'Management',
            'Digital'
        ],
        link: 'https://sugoi8management.com/',
        problem: 'Disorganized event ticketing systems and lack of professional agency profiling.',
        impact: 'Integrated an end-to-end event management system that successfully handled 5 major regional events.'
    }
];
// ───────────────────────────────────────────────
// Magnetic Project Card
// ───────────────────────────────────────────────
function ProjectCard({ project, index }) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseMove = (e)=>{
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePos({
            x: x * 0.1,
            y: y * 0.1
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: cardRef,
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-100px"
        },
        transition: {
            duration: 0.8,
            delay: index * 0.1,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        onMouseMove: handleMouseMove,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>{
            setIsHovered(false);
            setMousePos({
                x: 0,
                y: 0
            });
        },
        animate: {
            x: mousePos.x,
            y: mousePos.y
        },
        className: "group relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
        relative aspect-[4/5] md:aspect-video rounded-2xl overflow-hidden bg-card/40 backdrop-blur-xl border 
        transition-all duration-500 transform-gpu
        ${isHovered ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20 scale-[1.02]' : 'border-white/10 shadow-black/50'}
      `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 noise opacity-10 pointer-events-none"
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                        src: project.image,
                        alt: project.title,
                        animate: isHovered ? {
                            scale: 1.1,
                            filter: 'brightness(0.6) blur(2px)'
                        } : {
                            scale: 1,
                            filter: 'brightness(0.4) blur(0px)'
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-black text-cyan-400 tracking-[0.3em] uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/20",
                                    children: project.category
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$satellite$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Satellite$3e$__["Satellite"], {
                                        size: 14,
                                        className: "text-cyan-400/50"
                                    }, void 0, false, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-4xl md:text-6xl font-black text-white uppercase tracking-tighter font-['Teko'] leading-none drop-shadow-lg",
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            height: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            height: 'auto',
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            height: 0,
                                            y: 20
                                        },
                                        className: "overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300 line-clamp-2 mb-4 font-medium max-w-md",
                                                children: project.description
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-6",
                                                children: project.tech.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20",
                                                        children: t
                                                    }, i, false, {
                                                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between pt-4 border-t border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-cyan-400/60 uppercase text-[9px] font-black tracking-widest",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 59
                                                        }, this),
                                                        " v4.0.2"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 59
                                                        }, this),
                                                        " PRO_AI"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        project.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: project.link,
                                            target: "_blank",
                                            className: "flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg text-xs font-bold transition-colors",
                                            children: [
                                                "VIEW_LIVE ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        top: '-100%'
                    },
                    animate: {
                        top: '200%'
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    className: "absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none z-20"
                }, void 0, false, {
                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "8VBw9q9ygdk3G+sQSaLpFM838nc=");
_c = ProjectCard;
function Portfolio() {
    _s1();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portfolio",
        className: "jsx-e5e9b8ffe51fb738" + " " + "relative min-h-screen py-32 bg-background overflow-hidden px-6 lg:px-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e5e9b8ffe51fb738" + " " + "absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e5e9b8ffe51fb738" + " " + "absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]"
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e5e9b8ffe51fb738" + " " + "absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e5e9b8ffe51fb738" + " " + "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e5e9b8ffe51fb738" + " " + "flex flex-col items-center mb-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e5e9b8ffe51fb738" + " " + "flex items-center justify-center gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e5e9b8ffe51fb738" + " " + "h-[1px] w-12 bg-cyan-500/30"
                                        }, void 0, false, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-e5e9b8ffe51fb738" + " " + "text-[10px] font-black text-cyan-400 tracking-[1em] uppercase",
                                            children: "SYSTEM_ARCHIVE"
                                        }, void 0, false, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e5e9b8ffe51fb738" + " " + "h-[1px] w-12 bg-cyan-500/30"
                                        }, void 0, false, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-e5e9b8ffe51fb738" + " " + "text-7xl md:text-9xl font-black text-foreground uppercase tracking-tighter font-['Teko'] leading-[0.8] mb-8",
                                    children: [
                                        "SELECTED ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-e5e9b8ffe51fb738" + " " + "text-transparent border-text-cyan",
                                            children: "WORKS"
                                        }, void 0, false, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                            lineNumber: 240,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e5e9b8ffe51fb738" + " " + "inline-block px-6 py-2 border border-cyan-500/20 rounded-full backdrop-blur-md bg-white/5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-e5e9b8ffe51fb738" + " " + "text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                size: 10,
                                                className: "animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            " OPTIMIZED_PROJECT_LISTING_V4.0"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e5e9b8ffe51fb738" + " " + "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12",
                        children: PROJECTS.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: project,
                                index: index
                            }, project.id, false, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e5e9b8ffe51fb738" + " " + "mt-24 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            className: "flex flex-col items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e5e9b8ffe51fb738" + " " + "w-1 bg-gradient-to-b from-cyan-500/50 to-transparent h-20"
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-e5e9b8ffe51fb738" + " " + "text-[10px] font-bold text-foreground/30 uppercase tracking-[0.5em]",
                                    children: "END_OF_ARCHIVE"
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e5e9b8ffe51fb738",
                children: ".border-text-cyan{-webkit-text-stroke:1px #22d3ee66}.transform-gpu{backface-visibility:hidden;transform:translateZ(0)}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/SyntaxWeb/src/components/sections/Portfolio.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_s1(Portfolio, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = Portfolio;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectCard");
__turbopack_context__.k.register(_c1, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SyntaxWeb/src/components/animations/TrueFocus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrueFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TrueFocus({ sentence = 'True Focus', separator = ' ', manualMode = false, blurAmount = 5, borderColor = '#22D3EE', glowColor = 'rgba(34, 211, 238, 0.6)', animationDuration = 0.5, pauseBetweenAnimations = 1, className = '' }) {
    _s();
    const words = sentence.split(separator);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lastActiveIndex, setLastActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [focusRect, setFocusRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrueFocus.useEffect": ()=>{
            if (!manualMode) {
                const interval = setInterval({
                    "TrueFocus.useEffect.interval": ()=>{
                        setCurrentIndex({
                            "TrueFocus.useEffect.interval": (prev)=>(prev + 1) % words.length
                        }["TrueFocus.useEffect.interval"]);
                    }
                }["TrueFocus.useEffect.interval"], (animationDuration + pauseBetweenAnimations) * 1000);
                return ({
                    "TrueFocus.useEffect": ()=>clearInterval(interval)
                })["TrueFocus.useEffect"];
            }
        }
    }["TrueFocus.useEffect"], [
        manualMode,
        animationDuration,
        pauseBetweenAnimations,
        words.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrueFocus.useEffect": ()=>{
            if (currentIndex === null || currentIndex === -1) return;
            if (!wordRefs.current[currentIndex] || !containerRef.current) return;
            const parentRect = containerRef.current.getBoundingClientRect();
            const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();
            setFocusRect({
                x: activeRect.left - parentRect.left,
                y: activeRect.top - parentRect.top,
                width: activeRect.width,
                height: activeRect.height
            });
        }
    }["TrueFocus.useEffect"], [
        currentIndex,
        words.length
    ]);
    const handleMouseEnter = (index)=>{
        if (manualMode) {
            setLastActiveIndex(index);
            setCurrentIndex(index);
        }
    };
    const handleMouseLeave = ()=>{
        if (manualMode) {
            setCurrentIndex(lastActiveIndex);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex gap-4 justify-center items-center flex-wrap ${className}`,
        ref: containerRef,
        style: {
            outline: 'none',
            userSelect: 'none'
        },
        children: [
            words.map((word, index)=>{
                const isActive = index === currentIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    ref: (el)=>{
                        wordRefs.current[index] = el;
                    },
                    className: "relative text-3xl md:text-5xl font-black cursor-pointer uppercase font-['Teko']",
                    style: {
                        filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
                        transition: `filter ${animationDuration}s ease`,
                        outline: 'none',
                        userSelect: 'none'
                    },
                    onMouseEnter: ()=>handleMouseEnter(index),
                    onMouseLeave: handleMouseLeave,
                    children: word
                }, index, false, {
                    fileName: "[project]/SyntaxWeb/src/components/animations/TrueFocus.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-0 left-0 pointer-events-none box-border border-0",
                animate: {
                    x: focusRect.x,
                    y: focusRect.y,
                    width: focusRect.width,
                    height: focusRect.height,
                    opacity: currentIndex >= 0 ? 1 : 0
                },
                transition: {
                    duration: animationDuration,
                    ease: "easeInOut"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute w-4 h-4 border-[2px] rounded-[2px] top-[-8px] left-[-8px] border-r-0 border-b-0",
                        style: {
                            borderColor: borderColor,
                            filter: `drop-shadow(0 0 4px ${glowColor})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/animations/TrueFocus.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute w-4 h-4 border-[2px] rounded-[2px] top-[-8px] right-[-8px] border-l-0 border-b-0",
                        style: {
                            borderColor: borderColor,
                            filter: `drop-shadow(0 0 4px ${glowColor})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/animations/TrueFocus.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute w-4 h-4 border-[2px] rounded-[2px] bottom-[-8px] left-[-8px] border-r-0 border-t-0",
                        style: {
                            borderColor: borderColor,
                            filter: `drop-shadow(0 0 4px ${glowColor})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/animations/TrueFocus.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute w-4 h-4 border-[2px] rounded-[2px] bottom-[-8px] right-[-8px] border-l-0 border-t-0",
                        style: {
                            borderColor: borderColor,
                            filter: `drop-shadow(0 0 4px ${glowColor})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/SyntaxWeb/src/components/animations/TrueFocus.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SyntaxWeb/src/components/animations/TrueFocus.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/SyntaxWeb/src/components/animations/TrueFocus.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(TrueFocus, "pBTTAUAXuvS9jVYuokE75NhEZgk=");
_c = TrueFocus;
var _c;
__turbopack_context__.k.register(_c, "TrueFocus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SyntaxWeb/src/components/sections/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/components/animations/SplitText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$TrueFocus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SyntaxWeb/src/components/animations/TrueFocus.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const TeamScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SyntaxWeb/src/components/ui/TeamScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/SyntaxWeb/src/components/ui/TeamScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = TeamScene;
function About() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "min-h-screen flex items-center py-20 lg:py-32 bg-transparent relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 relative z-10 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "initial",
                        whileInView: "animate",
                        viewport: {
                            once: true
                        },
                        transition: {
                            staggerChildren: 0.1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$TrueFocus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sentence: "INNOVATION",
                                    blurAmount: 3,
                                    borderColor: "#22D3EE",
                                    glowColor: "rgba(34, 211, 238, 0.4)",
                                    className: "!justify-start"
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                    lineNumber: 25,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                lineNumber: 24,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden mb-8 lg:mb-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-5xl md:text-8xl font-black text-foreground tracking-tighter uppercase font-['Teko'] leading-[0.85]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            text: t.about.heading,
                                            className: "text-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                            lineNumber: 36,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$components$2f$animations$2f$SplitText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            text: t.about.subheading,
                                            className: "text-foreground/10"
                                        }, void 0, false, {
                                            fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                            lineNumber: 37,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                    lineNumber: 35,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden mb-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    variants: {
                                        initial: {
                                            y: "110%"
                                        },
                                        animate: {
                                            y: 0,
                                            transition: {
                                                duration: 1.2,
                                                delay: 0.2,
                                                ease: [
                                                    0.16,
                                                    1,
                                                    0.3,
                                                    1
                                                ]
                                            }
                                        }
                                    },
                                    className: "text-base md:text-lg text-foreground/60 font-medium tracking-tight leading-relaxed max-w-xl",
                                    children: t.about.description
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-border",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-foreground font-black uppercase tracking-[0.4em] text-[10px] mb-3 group-hover:text-[#22D3EE] transition-colors",
                                                children: t.about.intelligent.title
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                                lineNumber: 55,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 text-sm font-medium",
                                                children: t.about.intelligent.desc
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                                lineNumber: 56,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-foreground font-black uppercase tracking-[0.4em] text-[10px] mb-3 group-hover:text-[#22D3EE] transition-colors",
                                                children: t.about.evolution.title
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                                lineNumber: 59,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-foreground/60 text-sm font-medium",
                                                children: t.about.evolution.desc
                                            }, void 0, false, {
                                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                                lineNumber: 60,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                        lineNumber: 58,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1.5
                        },
                        viewport: {
                            once: true
                        },
                        className: "relative h-[500px] flex items-center justify-center overflow-visible group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full absolute inset-0 z-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamScene, {}, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 p-8 z-10 pointer-events-none opacity-20 hidden md:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-black text-foreground uppercase tracking-[0.5em] font-['Teko'] group-hover:text-[#22D3EE] transition-colors",
                                    children: "TEAM_CORE_V4"
                                }, void 0, false, {
                                    fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                    lineNumber: 78,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                                lineNumber: 77,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
                lineNumber: 17,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/SyntaxWeb/src/components/sections/About.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_s(About, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$SyntaxWeb$2f$src$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c1 = About;
var _c, _c1;
__turbopack_context__.k.register(_c, "TeamScene");
__turbopack_context__.k.register(_c1, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=SyntaxWeb_src_components_d518ba03._.js.map