module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        babel: {

            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'client/js/src',
                        src: ['**/*.js'],
                        dest: 'client/js/build/',
                        ext:'.js'
                    },
                    {
                        expand: true,
                        cwd: 'server/src',
                        src: ['**/*.js'],
                        dest: 'server/build/',
                        ext:'.js'
                    }
                ]
            }

        },

        watch: {
            scripts: {
                files: ['**/src/**/*.js'],
                tasks: ['babel'],
            },
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/react/dist/*.js',
                        dest: 'client/deps/react/'
                    }
                ]
            }
        }
    });

    grunt.registerTask('loadDeps', ['copy'])
    grunt.registerTask('default', ['babel']);

}