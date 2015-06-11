module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
        dist: {
            files: {
                '*/dist/**/*.js': '*/src/**/*.js'
            }
        }
      },

      watch: {
        scripts: {
            files: ['*/src/**/*.js'],
            tasks: ['babel'],
        },
      },
    });

    grunt.registerTask('default', ['babel']);

}