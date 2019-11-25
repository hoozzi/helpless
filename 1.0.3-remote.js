var body = $response.body;
body = '\/*\n@supported 5753231F0FEF\n*\/\n' + body;

$done(body);
