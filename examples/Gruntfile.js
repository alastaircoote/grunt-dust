module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    dust: {

      defaults: {
        files: {
          "dst/default/views.js": "src/**/*.dust"
        },
      },

      many_targets: {
        files: [
          {
            expand: true,
            cwd: "src/",
            src: ["**/*.dust"],
            dest: "dst/many-targets/",
            ext: ".js"
          }
        ],
        options: {
          relative: true
        }
      },

      no_wrapper: {
        files: {
          "dst/views_no_amd/views.js": "src/**/*.dust"
        },
        options: {
          wrapper: false
        }
      },

      amd_custom_deps: {
        files: {
          "dst/views_amd_custom_deps/views.js": "src/**/*.dust"
        },
        options: {
          wrapper: "amd",
          wrapperOptions: {
            deps: {
              dust: "dust-core-1.0.0.min.js"
            }
          }
        }
      },

      amd_without_deps: {
        files: {
          "dst/views_amd_without_deps/views.js": "src/**/*.dust"
        },
        options: {
          wrapper: "amd",
          wrapperOptions: {
            deps: false
          }
        }
      },

      amd_with_package_name: {
        files: {
          "dst/views_amd_with_package_name/views.js": "src/**/*.dust"
        },
        options: {
          wrapper: "amd",
          wrapperOptions: {
            packageName: "views"
          }
        }
      },

      commonjs: {
        files: {
          "dst/views_commonjs/views.js": "src/**/*.dust"
        },
        options: {
          wrapper: "commonjs",
          wrapperOptions: {
            deps: {
              foo: "foo.js",
              dust: "dust.js"
            }
          }
        }
      },

      nested_relative: {
        files: {
          "dst/views_nested_relative/views.js": "src/**/*.dust"
        },
        options: {
          basePath: "src/"
        }
      },

      no_runtime: {
        files: {
          "dst/views_no_runtime/views.js": "src/**/*.dust"
        },
        options: {
          runtime: false
        }
      }

    }

  });

  // Load local tasks.
  if(process.env.TEST) {
    grunt.loadTasks("../../tasks");
  } else {
    grunt.loadTasks("../tasks");
  }

  // Default task.
  grunt.registerTask("default", "dust");

};
