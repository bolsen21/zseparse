// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@babel/register')({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
});
//process.env.__RELEASE_INFORMATION__ = btoa(Date.now().toString());
process.env.__RELEASE_INFORMATION__ = Buffer.from(Date.now().toString(), 'binary').toString('base64');
require(`${__dirname}/${process.argv[2]}`);
