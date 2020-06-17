const shell = require('shelljs')

const url = 'https://gitee.com/syncwe/vue-element-admin.git'

if( !shell.which('git') ) {
	shell.echo('Sorry, this script requires git')
	shell.exit(1)
}

const root = process.argv[2]

if( !root ) {
	shell.echo('Please input <project-name>')
	shell.echo('use: npx @cli/create-admin hello-admin')
	shell.exit(1)
}

if( shell.exec(`git clone --no-checkout ${url} ${root}`).code !== 0 ) {
	shell.echo('Error: git clone failed')
	shell.exit(1)
}


shell.cd(root)

shell.exec('git reset --hard HEAD')
shell.rm('-rf', './.git')


shell.exec('npm install --registry=https://registry.npm.taobao.org -dd')

shell.echo(`	\n Start Up: npm run dev	\n`)

shell.exec('npm run dev')





