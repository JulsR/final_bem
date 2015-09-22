module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "dist/css/application.css": "dist/scss/application.scss" // destination file and source file
        }
      }  
    },

     uglify: {
                build: {
                    src: 'dist/js/*.js',
                    dest: 'dist/js/*.min.js'
                }
        },

    watch: {
      styles: {
        files: ['dist/scss/**/**.scss'], // which files to watch
        tasks: ['sass'],
        options: {
          nospawn: true
        }
      }

    }

  });

  grunt.registerTask('default', ['sass', 'uglify', 'watch']);


}