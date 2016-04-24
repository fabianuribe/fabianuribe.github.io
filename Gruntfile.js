module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {expand: true, cwd: '_site/tag', src: ['**'], dest: 'tag/'}
        ]
      }
    },
    cssmin: {
        target: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['**/*.css', '!**/*.min.css'],
              dest: 'assets/css',
              ext: '.min.css'
            }]
        }
    },
    shell: {
        build: {
            command: 'jekyll build'
        },
        clean: {
            command: 'rm -r _site/tag/*'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('clean', ['shell:clean']);
  grunt.registerTask('minify', ['cssmin']);
  grunt.registerTask('build', ['shell:build']);
  grunt.registerTask('tag', ['copy']);
  grunt.registerTask('default', ['clean', 'minify', 'build', 'tag']);
};
