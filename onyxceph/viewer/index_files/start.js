! function () {
    try {
        canvas = $("#wglCanvas")[0], debugLevel = getUrlVar("debug"), void 0 === debugLevel && (debugLevel = 0);
        var e = getUrlVar("bg");
        void 0 !== e && (viewerSettings.backColor = shortHexToRGB(e, !1));
        var t = getUrlVar("fg");
        void 0 !== t && (viewerSettings.frontColor = shortHexToRGB(t, !1)), viewerSettings.backColorStr = "rgb(" + viewerSettings.backColor[0] + "," + viewerSettings.backColor[1] + "," + viewerSettings.backColor[2] + ")", viewerSettings.frontColorStr = "rgb(" + viewerSettings.frontColor[0] + "," + viewerSettings.frontColor[1] + "," + viewerSettings.frontColor[2] + ")", $("#canvasContainer").css("background-color", "rgb(" + viewerSettings.backColor[0] + "," + viewerSettings.backColor[1] + "," + viewerSettings.backColor[2] + ")"), document.fullscreenElement ? (canvas.width = screen.width, canvas.height = screen.height) : (canvas.width = window.innerWidth, canvas.height = window.innerHeight);
        var i = navigator.userAgent || navigator.vendor || window.opera;
        if (/windows phone/i.test(i) || /android/i.test(i) ? isIOS = !1 : /iPad|iPhone|iPod/.test(i) && !window.MSStream && (isIOS = !0), isIOS && logExtra("iOS detected"), initTouch($("#wglCanvas").get(0)), window.addEventListener("message", uiEvent), $("#canvasContainer").on("contextmenu", function (e) {
                return !1
            }), $("#showSceneInfo").on("click", function () {
                return setSceneOptions(!glScene.showSceneOptions), !1
            }), $(".spectrum").spectrum({
                showButtons: !1,
                showInitial: !0,
                showInput: !0,
                preferredFormat: "rgb",
                className: "colorField",
                move: function (e) {
                    this.value = Math.round(e.toHsl().h);
                    var e = e.toRgb(),
                        t = [e.r, e.g, e.b];
                    switch (vec3.scale(t, t, 1 / 255), this.id) {
                        case "fColor":
                            for (var i = 0; i < activeModel.selectedObjects.length; ++i) activeModel.objects[activeModel.selectedObjects[i]].faceColor.RGB = t;
                            break;
                        case "bColor":
                            for (i = 0; i < activeModel.selectedObjects.length; ++i) activeModel.objects[activeModel.selectedObjects[i]].backColor.RGB = t
                    }
                    renderFrame()
                }
            }), $("#optObjFColor").on("click", 'input[type="checkbox"]', function () {
                setActiveObjectUseFColor($('#optObjFColor input[type="checkbox"]').prop("checked"))
            }), $("#optObjBColor").on("click", 'input[type="checkbox"]', function () {
                setActiveObjectUseBColor($('#optObjBColor input[type="checkbox"]').prop("checked"))
            }), $("#optObjUseTexture").on("click", 'input[type="checkbox"]', function () {
                setActiveObjectUseTexture($('#optObjUseTexture input[type="checkbox"]').prop("checked"))
            }), $("#optObjTransparency").on("change mousemove", 'input[type="range"]', function () {
                setActiveObjectTransparency(this.value / 100)
            }), $("#optObjRotation").on("change", 'input[type="range"]', function () {}), $("#optObjClipObject").on("click", 'input[type="checkbox"]', function () {
                setActiveObjectDoClip($('#optObjClipObject input[type="checkbox"]').prop("checked"))
            }), $("#optViewShader").on("change", 'select[name="shaderSel"]', function () {
                glScene.selectedShader !== $(this).val() && (glScene.selectedShader = $(this).val(), updateShader())
            }), $("#optViewSpecular").on("change mousemove", 'input[type="range"]', function () {
                activeModel.specular = this.value / 100 + .5, renderFrame()
            }), $("#optViewBrightness").on("change mousemove", 'input[type="range"]', function () {
                activeModel.brightness = this.value / 100 + .5, renderFrame()
            }), $("#optViewSoftFocus").on("change mousemove", 'input[type="range"]', function () {
                activeModel.softFocus = this.value / 100 + .5, renderFrame()
            }), $("#btnClipNo").on("click", function () {
                activeModel.ClipKind = 0, $(".btnClip").toggleClass("btnClipActive", !1), $(this).toggleClass("btnClipActive", !0), renderFrame()
            }), $("#btnClipX").on("click", function () {
                activeModel.ClipKind = 1, $(".btnClip").toggleClass("btnClipActive", !1), $(this).toggleClass("btnClipActive", !0), renderFrame()
            }), $("#btnClipY").on("click", function () {
                activeModel.ClipKind = 2, $(".btnClip").toggleClass("btnClipActive", !1), $(this).toggleClass("btnClipActive", !0), renderFrame()
            }), $("#btnClipZ").on("click", function () {
                activeModel.ClipKind = 3, $(".btnClip").toggleClass("btnClipActive", !1), $(this).toggleClass("btnClipActive", !0), renderFrame()
            }), $("#inClipAmount").on("change mousemove", function () {
                activeModel.ClipPosition = .01 * this.value, renderFrame()
            }), $("#btnClipInvert").on("click", function () {
                activeModel.ClipInvert = !activeModel.ClipInvert, renderFrame()
            }), $("#btnRotView").on("click", function () {
                switch (glScene.viewDir = (glScene.viewDir + 1) % 6, mat4.identity(glScene.rotMatrix), glScene.viewDir) {
                    case 0:
                        break;
                    case 1:
                        mat4.rotate(glScene.rotMatrix, glScene.rotMatrix, .5 * Math.PI, [0, 1, 0]);
                        break;
                    case 2:
                        mat4.rotate(glScene.rotMatrix, glScene.rotMatrix, Math.PI, [0, 1, 0]);
                        break;
                    case 3:
                        mat4.rotate(glScene.rotMatrix, glScene.rotMatrix, -.5 * Math.PI, [0, 1, 0]);
                        break;
                    case 4:
                        mat4.rotate(glScene.rotMatrix, glScene.rotMatrix, -.5 * Math.PI, [1, 0, 0]);
                        break;
                    case 5:
                        mat4.rotate(glScene.rotMatrix, glScene.rotMatrix, .5 * Math.PI, [1, 0, 0])
                }
                renderFrame()
            }), $("#btnToggleVis").on("click", function () {
                activeModel.VisibilityToggle = (activeModel.VisibilityToggle + 1) % 4;
                for (var e = 0; e < activeModel.objects.length; ++e) 0 == activeModel.VisibilityToggle ? activeModel.objects[e].isVisible = !0 : 3 == activeModel.VisibilityToggle ? activeModel.objects[e].isVisible = !1 : activeModel.objects[e].isVisible = 1 == activeModel.VisibilityToggle && 0 == activeModel.objects[e].group || 2 == activeModel.VisibilityToggle && 1 == activeModel.objects[e].group, $("#obj" + String(e)).prop("checked", activeModel.objects[e].isVisible);
                renderFrame()
            }), $("#btnToggleGrd").on("click", function () {
                glScene.gridOverlay.show = !glScene.gridOverlay.show, renderFrame()
            }), !webGLStart()) return;
        var o = getUrlVar("mlink"),
            n = getUrlVar("p");
        loadImage3DLink(o, n)
    } catch (e) {
        return logError(e)
    }
}();