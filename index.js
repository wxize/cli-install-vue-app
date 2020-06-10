const shell = require('shelljs')

const url = 'https://github.com/synjone/vue-admin-template.git'

if( !shell.which('git') ) {

	shell.echo('Sorry, this script requires git')
	shell.exit(1)

}


shell.rm('-rf', './.git')

shell.rm('-rf', './package.json')


if( shell.exec(`git clone --no-checkout ${url} tmp`).code !== 0 ) {
	
	shell.echo('Error: git clone failed')
	shell.exit(1)

}

shell.mv('tmp/.git', '.')

shell.rm('-rf', 'tmp')

shell.exec('git reset --hard HEAD')

shell.rm('-rf', '.tools')

shell.exec('npm install --registry=https://registry.npm.taobao.org -dd')

shell.echo(`	\n Start Up: npm run dev	\n`)

shell.exec('npm run dev')





