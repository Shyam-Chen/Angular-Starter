import 'zone.js/dist/zone-node';
import 'rxjs/Rx';
import * as express from 'express';
import { enableProdMode } from '@angular/core';
import { ServerAppModuleNgFactory } from './ngfactory/src/app/server-app.module.ngfactory';
import { ngExpressEngine } from './express-engine';
enableProdMode();
var app = express();
app.engine('html', ngExpressEngine({
    aot: true,
    bootstrap: [ServerAppModuleNgFactory]
}));
app.set('port', (process.env.PORT || 8080));
app.set('view engine', 'html');
app.set('views', 'src');
app.use('/', express.static('dist', { index: false }));
var routes = ['/', '/about'];
routes.forEach(function (route) {
    app.get(route, function (req, res) {
        res.render('index', { req: req });
    });
});
app.listen(app.get('port'), function () {
    console.log("Port: " + app.get('port') + ".");
});
