module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        browserify: {

            dist: {
                options: {
                    transform: [
                        ["babelify", { "stage": 0 }]
                    ]
                },
                files: {
                    "client/js/build/bundle.js": "client/js/src/app.js"
                }
            }
        },


        babel: {

            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'server/src',
                        src: ['**/*.*'],
                        dest: 'server/build/',
                        ext:'.js'
                    }
                ]
            }

        },

        watch: {
            scripts: {
                files: ['**/src/**/*.*'],
                tasks: ['build'],
            },
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/react/dist/*.*',
                        dest: 'client/deps/react/'
                    }
                ]
            }
        }
    });

    grunt.registerTask('loadDeps', ['copy'])
    grunt.registerTask('build', ['babel', 'browserify'])
    grunt.registerTask('default', ['build']);

}