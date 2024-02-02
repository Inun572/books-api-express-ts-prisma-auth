"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("../prisma");
var auth_seeds_1 = require("./auth-seeds");
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _i, role, _d, _e, _f, _g, permission, _h, _j, _k, _l, role, roleRecord, _m, _o, permission, permissionRecord;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0: return [4 /*yield*/, prisma_1.default.user.deleteMany()];
            case 1:
                _p.sent();
                return [4 /*yield*/, prisma_1.default.permissionRole.deleteMany()];
            case 2:
                _p.sent();
                return [4 /*yield*/, prisma_1.default.role.deleteMany()];
            case 3:
                _p.sent();
                return [4 /*yield*/, prisma_1.default.permission.deleteMany()];
            case 4:
                _p.sent();
                _a = auth_seeds_1.Role;
                _b = [];
                for (_c in _a)
                    _b.push(_c);
                _i = 0;
                _p.label = 5;
            case 5:
                if (!(_i < _b.length)) return [3 /*break*/, 8];
                _c = _b[_i];
                if (!(_c in _a)) return [3 /*break*/, 7];
                role = _c;
                return [4 /*yield*/, prisma_1.default.role.create({
                        data: {
                            name: auth_seeds_1.Role[role],
                        },
                    })];
            case 6:
                _p.sent();
                _p.label = 7;
            case 7:
                _i++;
                return [3 /*break*/, 5];
            case 8:
                _d = auth_seeds_1.Permission;
                _e = [];
                for (_f in _d)
                    _e.push(_f);
                _g = 0;
                _p.label = 9;
            case 9:
                if (!(_g < _e.length)) return [3 /*break*/, 12];
                _f = _e[_g];
                if (!(_f in _d)) return [3 /*break*/, 11];
                permission = _f;
                return [4 /*yield*/, prisma_1.default.permission.create({
                        data: {
                            name: auth_seeds_1.Permission[permission],
                        },
                    })];
            case 10:
                _p.sent();
                _p.label = 11;
            case 11:
                _g++;
                return [3 /*break*/, 9];
            case 12:
                _h = auth_seeds_1.PermissionAssignment;
                _j = [];
                for (_k in _h)
                    _j.push(_k);
                _l = 0;
                _p.label = 13;
            case 13:
                if (!(_l < _j.length)) return [3 /*break*/, 20];
                _k = _j[_l];
                if (!(_k in _h)) return [3 /*break*/, 19];
                role = _k;
                return [4 /*yield*/, prisma_1.default.role.findFirst({
                        where: {
                            name: role,
                        },
                    })];
            case 14:
                roleRecord = _p.sent();
                _m = 0, _o = auth_seeds_1.PermissionAssignment[role];
                _p.label = 15;
            case 15:
                if (!(_m < _o.length)) return [3 /*break*/, 19];
                permission = _o[_m];
                return [4 /*yield*/, prisma_1.default.permission.findFirst({
                        where: {
                            name: permission,
                        },
                    })];
            case 16:
                permissionRecord = _p.sent();
                return [4 /*yield*/, prisma_1.default.permissionRole.create({
                        data: {
                            role_id: roleRecord === null || roleRecord === void 0 ? void 0 : roleRecord.id,
                            permission_id: permissionRecord === null || permissionRecord === void 0 ? void 0 : permissionRecord.id,
                        },
                    })];
            case 17:
                _p.sent();
                _p.label = 18;
            case 18:
                _m++;
                return [3 /*break*/, 15];
            case 19:
                _l++;
                return [3 /*break*/, 13];
            case 20: return [2 /*return*/];
        }
    });
}); };
main().catch(function (e) {
    throw e;
});
