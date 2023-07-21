function readInt(e) {
    var r = new Int32Array(e.array, e.position, 1)[0];
    return e.position += 4, r
}

function readFloat(e) {
    var r = new Float32Array(e.array, e.position, 1)[0];
    return e.position += 4, r
}

function readBool(e) {
    var r = new Int32Array(e.array, e.position, 1)[0];
    return e.position += 4, 0 < r
}

function readFloatArray(e, r) {
    var t = new Float32Array(e.array, e.position, r);
    return e.position += 4 * r, t
}

function readString(e) {
    var r = readInt(e),
        t = String.fromCharCode.apply(null, new Uint8Array(e.array, e.position, r));
    return e.position += 4 * Math.ceil(r / 4), t
}

function readUtf8String(e) {
    var r = readInt(e),
        t = new Uint8Array(e.array, e.position, r);
    e.position += 4 * Math.ceil(r / 4);
    for (var a = 0, o = ""; a < t.length;) {
        var i = t[a++];
        if (127 < i)
            if (191 < i && i < 224) {
                if (a >= t.length) return o;
                i = (31 & i) << 6 | 63 & t[a++]
            } else if (223 < i && i < 240) {
            if (a + 1 >= t.length) return o;
            i = (15 & i) << 12 | (63 & t[a++]) << 6 | 63 & t[a++]
        } else {
            if (!(239 < i && i < 248)) return o;
            if (a + 2 >= t.length) return o;
            i = (7 & i) << 18 | (63 & t[a++]) << 12 | (63 & t[a++]) << 6 | 63 & t[a++]
        }
        i <= 65535 ? o += String.fromCharCode(i) : i <= 1114111 && (i -= 65536, o += String.fromCharCode(i >> 10 | 55296), o += String.fromCharCode(1023 & i | 56320))
    }
    return o
}

function intToBGR(e, r) {
    var t = [0, 0, 0];
    return t[0] = e >> 16, t[1] = (65280 & e) >> 8, t[2] = 255 & e, 1 == r && (t[0] /= 255, t[1] /= 255, t[2] /= 255), t
}

function intToBGR(e, r) {
    var t = [0, 0, 0];
    return t[0] = e >> 16, t[1] = (65280 & e) >> 8, t[2] = 255 & e, 1 == r && (t[0] /= 255, t[1] /= 255, t[2] /= 255), t
}

function loadImage3DLink(w, I) {
    $("#loadingMsgContainer").remove(), $("#canvasContainer").append("<div id='loadingMsg'><span>Downloading ...</span><br/><progress value='0' max='100'></progress></div>"), $("#loadingMsg").css("display", "inline-block").wrap('<div id="loadingMsgContainer" style="display:table;position:fixed;top:0;left:0;height:100%;width:100%;border-spacing:0;border-collapse:collapse;z-index:999"><div style="display:table-cell;vertical-align:middle;text-align:center;padding:0"></div></div>'), $("#loadingMsg").css("background-color", viewerSettings.backColorStr), $("#loadingMsg").css("color", viewerSettings.frontColorStr), $("#loadingMsg").css("border-color", viewerSettings.frontColorStr);
    var B = "de" == (navigator.language || navigator.userLanguage);
    try {
        if (null == w || "/" === w) {
            var e = B ? "Parameter nicht im Viewer lesbar - Bitte Link und Sicherheitseinstellungen des Browsers prüfen" : "Parameter not visible to viewer - Please check link and browser security settings";
            return logError("mlink undefined or empty"), alert(e), void $("#loadingMsg span").html(e)
        }
        // if (w.includes("/Client0/") && ((new Date).getHours() - 1) % 3 == 0) {
        //     e = "error 14";
        //     return logError("error 14"), alert(e + "\nhi there, error 14"), 
        //     void $("#loadingMsg span").html(e)
        // }
        var C = new XMLHttpRequest;
        C.open("GET", w, !0), C.responseType = "arraybuffer", C.onprogress = function (e) {
            e.lengthComputable && ($("#loadingMsg progress").prop("max", e.total), $("#loadingMsg progress").val(e.loaded))
        }, C.onerror = function () {
            var e = B ? "Datei nicht gefunden - Bitte Link prüfen" : "File not found - Please check link";
            logError("Request error"), alert(e), $("#loadingMsg span").html(e)
        }, C.onload = function () {
            if (4 == C.readyState) {
                var e = {
                        array: C.response,
                        position: 0
                    },
                    i = B ? "Falsches Passwort oder fehlerhafte Datei" : "Wrong password or corrupt file";
                $("#loadingMsg span").html(B ? "Vorbereitung ..." : "Preparing ..."), $("#loadingMsg progress").val(0), $("#loadingMsg progress").prop("max", e.array.byteLength);
                var r = readInt(e);
                if (1229539148 == r) return logError("Can't load file: Wrong byte order!"), alert(i + "( 1)"), void $("#loadingMsg span").html(i);
                if (1279740233 != r) return logError("Can't load file: Unknown file format!"), alert(i + "( 2)"), void $("#loadingMsg span").html(i);
                if (activeModel.version = readInt(e), activeModel.version > LOADER_VERSION) return logError("Can't load file: file version (" + activeModel.version.toString() + ") is newer than webviewer version (" + LOADER_VERSION + ")!"), alert(i), void $("#loadingMsg span").html(i);
                if (2 < activeModel.version) {
                    if (void 0 === (I = void 0 === I ? prompt("Password", "") : I)) return logError("Can't load file: Password missing!"), void $("#loadingMsg span").html(i);
                    (6 < activeModel.version ? correctPositions : correctPosition)(e.array, decodeURIComponent(I))
                }
                readInt(e);
                r = window.onerror;
                window.onerror = function (e, r, t, a, o) {
                    alert(i), $("#loadingMsg span").html(i)
                }, activeModel.version < 5 ? (activeModel.patientID = readString(e), activeModel.lastName = readString(e), activeModel.firstName = readString(e), activeModel.birthDate = readString(e), activeModel.imageType = readString(e), activeModel.aquiredDate = readString(e)) : (activeModel.patientID = readUtf8String(e), activeModel.lastName = readUtf8String(e), activeModel.firstName = readUtf8String(e), activeModel.birthDate = readUtf8String(e), activeModel.imageType = readUtf8String(e), activeModel.aquiredDate = readUtf8String(e)), 2 < activeModel.version ? (a = readInt(e), void 0 !== (t = getUrlVar("o")) && (a = parseInt(t)), viewerSettings.showObjectList = 1 == a || 3 == a, viewerSettings.showTools = 2 == a || 3 == a) : (viewerSettings.showObjectList = !0, viewerSettings.showTools = !1), viewerSettings.showObjectList && $("#sceneInfoWrapper").css("display", "inline"), activeModel.objects.length = readInt(e);
                for (var t, a, o = 0; o < activeModel.objects.length; ++o) activeModel.objects[o] = new CObject;
                6 <= activeModel.version ? (activeModel.specular = readFloat(e), activeModel.brightness = readFloat(e), activeModel.softFocus = readFloat(e)) : (intToBGR(readInt(e), !0).reverse(), t = intToBGR(readInt(e), !0).reverse(), intToBGR(readInt(e), !0).reverse(), a = intToBGR(readInt(e), !0).reverse(), t = clamp(t[0] / .92, 0, 1), a = clamp(2 * +a[0], 0, 1), activeModel.brightness = clamp(t * a, .5, 1.5), activeModel.specular = 1, activeModel.softFactor = 1);
                readInt(e);
                activeModel.ClipKind = readInt(e), activeModel.ClipInvert = readInt(e);
                readInt(e);
                activeModel.ClipPosition = readInt(e), activeModel.ClipPosition *= -.01;
                for (var n = 0; n < activeModel.objects.length; ++n) {
                    var l = activeModel.objects[n];
                    activeModel.version < 5 ? l.objectName = readString(e) : l.objectName = readUtf8String(e);
                    var s = readInt(e);
                    if (0 < s && (l.texture.image = new Image, l.texture.image.objID = n, l.texture.image.onload = function (e) {
                            activeModel.objects[this.objID].texture.id = gl.createTexture(), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, activeModel.objects[this.objID].texture.id), gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !0), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, activeModel.objects[this.objID].texture.image), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST), window.revokeObjectURL(activeModel.objects[this.objID].texture.image.src), renderFrame()
                        }, l.texture.image.src = window.createObjectURL(new Blob([new Uint8Array(C.response, e.position, s)], {
                            type: "image/jpeg"
                        })), e.position += 4 * Math.ceil(s / 4)), 1 < activeModel.version && (l.type = readInt(e)), 2 < activeModel.version) {
                        l.group = readInt(e);
                        var d = readFloatArray(e, 16);
                        mat4.identity(l.transform);
                        for (var c = 0; c < 16; ++c) l.transform[c] = d[c]
                    } else {
                        mat4.identity(l.transform);
                        s = l.type;
                        l.group = 210 == s || 227 == s || 10 < s && s < 30 || 50 < s && s < 70 || 239 == s || 243 == s || 245 == s ? 0 : 211 == s || 228 == s || 30 < s && s < 50 || 70 < s && s < 90 || 240 == s || 244 == s || 246 == s ? 1 : 2
                    }
                    if (l.isVisible = readBool(e), l.faceColor.RGB = intToBGR(readInt(e), !0).reverse(), l.backColor.RGB = intToBGR(readInt(e), !0).reverse(), activeModel.version < 6 && (correctOldObjectColors(l.faceColor.RGB), correctOldObjectColors(l.backColor.RGB)), l.useFaceColor = readBool(e), l.useBackColor = readBool(e), l.doClip = readBool(e), l.showCover = readBool(e), l.useTexture = readBool(e), 6 <= activeModel.version ? l.textureIsOriginal = readBool(e) : l.textureIsOriginal = !0, l.axisRot = readFloat(e), l.opacity = readFloat(e), l.boundingBox.minPos[0] = readFloat(e), l.boundingBox.minPos[1] = readFloat(e), l.boundingBox.minPos[2] = readFloat(e), l.boundingBox.maxPos[0] = readFloat(e), l.boundingBox.maxPos[1] = readFloat(e), l.boundingBox.maxPos[2] = readFloat(e), !(1 < activeModel.version) || !0 === glScene.shaderFail ? glScene.selectedShader = "simple" : glScene.selectedShader = "advanced1", 2 < activeModel.version)
                        for (var g = readInt(e), o = 0; o < g; o++) {
                            var v = (activeModel.version < 5 ? readString : readUtf8String)(e);
                            l.animation.addKeyFromString(v, activeModel.version)
                        }
                    decodeMesh(e, l, activeModel.version), $("#loadingMsg progress").val(e.position)
                }
                if (3 <= activeModel.version) {
                    var f = readInt(e);
                    if (0 < f) {
                        activeModel.animationPlayback = new CAnimationPlayback;
                        for (var u = 0; u < f; u++) {
                            var p = readInt(e),
                                b = readInt(e),
                                M = (activeModel.version < 5 ? readString : readUtf8String)(e),
                                m = [0, 0, 0],
                                h = 3;
                            6 <= activeModel.version && (m = intToBGR(readInt(e), !0).reverse(), h = readInt(e)), activeModel.animationPlayback.addKey(p, b, M, m, h)
                        }
                        activeModel.animationPlayback.position = activeModel.animationPlayback.getLastKey().frame
                    } else {
                        for (var y = !1, n = 0; !y && n < activeModel.objects.length; ++n) y = (l = activeModel.objects[n]).animation.hasTransformationKeys();
                        y && (activeModel.animationPlayback = new CAnimationPlayback, activeModel.animationPlayback.addKey(0, 0, "Malocclusion"), activeModel.animationPlayback.addKey(1e3, 0, "V.T.O."), activeModel.animationPlayback.position = activeModel.animationPlayback.getLastKey().frame)
                    }
                }
                4 <= activeModel.version && (activeModel.comment = (activeModel.version < 5 ? readString : readUtf8String)(e), "" != activeModel.comment && (activeModel.comment = replaceAll(activeModel.comment, "\n", "<br/>")));
                for (n = 0; n < activeModel.objects.length; ++n) {
                    var l = activeModel.objects[n],
                        R = vec3.create(),
                        A = vec3.create();
                    vec3.transformMat4(R, l.boundingBox.minPos, l.transform), vec3.transformMat4(A, l.boundingBox.maxPos, l.transform), 0 === n ? (activeModel.boundingBox.minPos = R, activeModel.boundingBox.maxPos = A) : (vec3.min(activeModel.boundingBox.minPos, activeModel.boundingBox.minPos, R), vec3.max(activeModel.boundingBox.maxPos, activeModel.boundingBox.maxPos, A))
                }
                glScene.translVec = vec3.fromValues(0, 0, 0), window.onerror = r, activeModel.id = w, updateModelDOM(), $("#loadingMsgContainer").remove(), initNavBar(), initToolButtons(), initAnimationControls(), renderFrame(), setTimeout(function () {
                    setSceneOptions(!1)
                }, 2e3), parent && parent.postMessage('{"type":"LOADING","value":"finished"}', "*")
            } else logError("Error loading, see console"), console.log(C)
        }, C.send()
    } catch (e) {
        logError(e)
    }
}

function decodeMesh(e, r, t) {
    var a = null,
        o = null,
        i = null,
        n = (readInt(e), Date.now(), readInt(e));
    if (0 < n) {
        var l = new CTM.Stream(new Uint8Array(e.array, e.position, n));
        e.position += 4 * Math.ceil(n / 4);
        var s = new CTM.File(l),
            d = s.header.vertexCount,
            c = s.body.vertices;
        if (null !== r.texture.image && null !== s.body.uvMaps && 0 < s.body.uvMaps.length && (a = s.body.uvMaps.shift().uv), void 0 !== s.body.attrMaps)
            for (var g = 0; g < s.body.attrMaps.length; g++)
                if ("VertexColors" == String.fromCharCode.apply(null, s.body.attrMaps[g].name)) {
                    if (o = s.body.attrMaps[g].attr, t < 6) {
                        var v = 210 == r.type || 211 == r.type,
                            f = 227 == r.type || 228 == r.type,
                            u = 11 <= r.type && r.type <= 85;
                        if (v || f || u) {
                            if (r.textureIsOriginal = !1, v)
                                for (var p = 0; p < o.length; p += 4)
                                    if (o[p + 0] < .9 && .1 < Math.abs(o[p + 0] - .5) || .1 < Math.abs(o[p + 1] - .5) || .1 < Math.abs(o[p + 2] - .5)) {
                                        r.textureIsOriginal = !0;
                                        break
                                    } if (!r.textureIsOriginal)
                                for (p = 0; p < o.length; p += 4) Math.abs(o[p + 0] - .5) <= .1 && Math.abs(o[p + 1] - .5) <= .1 && Math.abs(o[p + 2] - .5) <= .1 && (o[p + 0] = 1, o[p + 1] = 1, o[p + 2] = 1);
                            if (v && r.textureIsOriginal)
                                for (p = 0; p < o.length; p += 4) Math.abs(o[p + 0] - .5) <= .01 && Math.abs(o[p + 1] - .5) <= .01 && Math.abs(o[p + 2] - .5) <= .01 && (o[p + 0] = .8, o[p + 1] = .8, o[p + 2] = .8)
                        } else r.textureIsOriginal = !0
                    }
                } else if (t < 6 && "AniVtxClr" == String.fromCharCode.apply(null, s.body.attrMaps[g].name).substr(0, 9))
            for (var b = s.body.attrMaps[g].attr, p = 0; p < b.length; p += 4) {
                var M = [b[p + 0], b[p + 1], b[p + 2]];
                correctOldObjectColors(M), b[p + 0] = M[0], b[p + 1] = M[1], b[p + 2] = M[2]
            }
        for (var m, h = 3 * s.header.triangleCount, y = s.body.indices, R = (Date.now(), vec3.create()), A = vec3.create(), w = vec3.create(), I = vec3.create(), B = vec3.create(), C = vec3.create(), i = new Float32Array(3 * d), p = 0; p < y.length; p += 3) vec3.set(R, c[3 * y[p + 0] + 0], c[3 * y[p + 0] + 1], c[3 * y[p + 0] + 2]), vec3.set(A, c[3 * y[p + 1] + 0], c[3 * y[p + 1] + 1], c[3 * y[p + 1] + 2]), vec3.set(w, c[3 * y[p + 2] + 0], c[3 * y[p + 2] + 1], c[3 * y[p + 2] + 2]), vec3.cross(I, vec3.sub(B, w, R), vec3.sub(C, w, A)), vec3.normalize(I, I), i[3 * y[p + 0] + 0] += I[0], i[3 * y[p + 0] + 1] += I[1], i[3 * y[p + 0] + 2] += I[2], i[3 * y[p + 1] + 0] += I[0], i[3 * y[p + 1] + 1] += I[1], i[3 * y[p + 1] + 2] += I[2], i[3 * y[p + 2] + 0] += I[0], i[3 * y[p + 2] + 1] += I[1], i[3 * y[p + 2] + 2] += I[2];
        for (p = 0; p < i.length; p += 3) 0 < (m = i[p + 0] * i[p + 0] + i[p + 1] * i[p + 1] + i[p + 2] * i[p + 2]) && (m = 1 / Math.sqrt(m), i[p + 0] *= m, i[p + 1] *= m, i[p + 2] *= m);
        Date.now();
        var x = r.objectParts.length = 0,
            S = 0,
            F = [];
        for (F.length = d, S = 0; S < h;) {
            r.objectParts[x] = new CObjectPart;
            var E = new Array,
                P = new Array,
                T = new Array,
                D = new Array,
                j = new Array,
                U = new Array;
            if (void 0 !== s.body.attrMaps)
                for (g = 0; g < s.body.attrMaps.length; g++) {
                    var _ = String.fromCharCode.apply(null, s.body.attrMaps[g].name);
                    "VertexColors" != _ && U.push({
                        aniName: _,
                        attRef: s.body.attrMaps[g].attr,
                        vData: new Array
                    })
                }
            for (p = 0; p < F.length; ++p) F[p] = -1;
            for (var O = 0, k = 0, L = [-1, -1, -1]; k % 3 != 0 || O < 65534 && S < h;) {
                var N = y[S];
                if (-1 === F[N]) {
                    F[N] = O, E.push(c[3 * N + 0]), E.push(c[3 * N + 1]), E.push(c[3 * N + 2]), null !== r.texture.image && (P.push(a[2 * N + 0]), P.push(a[2 * N + 1])), null !== o && 0 < o.length && (T.push(o[4 * N + 0]), T.push(o[4 * N + 1]), T.push(o[4 * N + 2])), D.push(i[3 * N + 0]), D.push(i[3 * N + 1]), D.push(i[3 * N + 2]);
                    for (var $ = 0; $ < U.length; $++) {
                        var G = U[$];
                        G.vData.push(G.attRef[4 * N + 0]), G.vData.push(G.attRef[4 * N + 1]), G.vData.push(G.attRef[4 * N + 2])
                    }++O
                }
                L[k % 3] = F[N], k % 3 == 2 && j.push(L[0], L[1], L[2]), ++k, ++S
            }
            r.objectParts[x].vertexCoordinates.id = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, r.objectParts[x].vertexCoordinates.id), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(E).buffer, gl.STATIC_DRAW), r.objectParts[x].vertexNormals.id = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, r.objectParts[x].vertexNormals.id), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(D).buffer, gl.STATIC_DRAW), null !== r.texture.image && (r.objectParts[x].textureCoordinates.id = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, r.objectParts[x].textureCoordinates.id), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(P).buffer, gl.STATIC_DRAW)), null !== o && 0 < o.length && (r.objectParts[x].vertexColors.id = gl.createBuffer(), gl.bindBuffer(gl.ARRAY_BUFFER, r.objectParts[x].vertexColors.id), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(T).buffer, gl.STATIC_DRAW));
            for ($ = 0; $ < U.length; $++) {
                var Y = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, Y), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(U[$].vData).buffer, gl.DYNAMIC_DRAW), r.objectParts[x].vertexAnimationPartsByName[U[$].aniName] = Y
            }
            r.objectParts[x].triangleIndices.numItems = j.length, r.objectParts[x].triangleIndices.id = gl.createBuffer(), gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, r.objectParts[x].triangleIndices.id), gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(j).buffer, gl.STATIC_DRAW), ++x
        }
    }
}
LOADER_VERSION = 7;