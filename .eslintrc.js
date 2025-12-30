module.exports = {
    extends: [
        'plugin:vue/essential'
    ],
    rules:{
        "at-rule-no-unknown": [ true, {
            "ignoreAtRules": [
              "extends",
              "tailwind"
            ]
          }],
    },
    env: {
      node: true,
      es2022: true, // ? add this
    },
}