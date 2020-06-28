const shell = require('shelljs')

const url = 'http://gitlab.xzxyun.com/campus/frontend/app-template.git'


const root = process.argv[2]
if( !root ) {
	shell.echo('Please input <project-name>')
	shell.echo('use: npx @cli/create-app my-app')
	shell.exit(1)
}


if( shell.exec(`git clone --no-checkout ${url} ${root}`).code !== 0 ) {
	shell.echo('Error: git clone failed')
	shell.exit(1)
}


shell.cd(root)

shell.exec('git reset --hard HEAD')
shell.rm('-rf', './.git')

// shell.exec('npm install --registry=https://registry.npm.taobao.org')

shell.echo(`	\n\n Success: Project created	\n`)

shell.echo(`	\n npm install --registry=https://registry.npm.taobao.org	\n`)

shell.echo(`	\n Start Up: npm run dev	\n\n`)

// shell.exec('npm run dev')





