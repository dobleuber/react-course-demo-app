import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

/*eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log('===================================='.blue);
console.log("Genering minified bulnde for production via Webpack. This will take a moment...".blue);
console.log('===================================='.blue);

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        return jsonStats.warnings.map(warn => console.log(warn.yellow));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log('===================================='.green);
    console.log('Your app has been compiled in prodution mode and written to /dist. it\'s ready to roll!'.green);
    console.log('===================================='.green);

    return 0;
});
