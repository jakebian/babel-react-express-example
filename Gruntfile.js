module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        babel: {

            options: {
                sourceMap: true
            },
            dist: {
                files: {
                   "./server/build/server.js": ["./server/src/server.js"]
                }
            }

        },

      watch: {
        scripts: {
            files: ['**/src/**/*.js'],
            tasks: ['babel'],
        },
      },
    });

    grunt.registerTask('default', ['babel']);

}