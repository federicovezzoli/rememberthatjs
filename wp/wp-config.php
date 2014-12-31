<?php
/**
 * Il file base di configurazione di WordPress.
 *
 * Questo file definisce le seguenti configurazioni: impostazioni MySQL,
 * Prefisso Tabella, Chiavi Segrete, Lingua di WordPress e ABSPATH.
 * E' possibile trovare ultetriori informazioni visitando la pagina: del
 * Codex {@link http://codex.wordpress.org/Editing_wp-config.php
 * Editing wp-config.php}. E' possibile ottenere le impostazioni per
 * MySQL dal proprio fornitore di hosting.
 *
 * Questo file viene utilizzato, durante l'installazione, dallo script
 * di creazione di wp-config.php. Non è necessario utilizzarlo solo via
 * web,è anche possibile copiare questo file in "wp-config.php" e
 * rimepire i valori corretti.
 *
 * @package WordPress
 */

// ** Impostazioni MySQL - E? possibile ottenere questoe informazioni
// ** dal proprio fornitore di hosting ** //
/** Il nome del database di WordPress */
define('DB_NAME', 'wp_rememberthatjs');

/** Nome utente del database MySQL */
define('DB_USER', 'root');

/** Password del database MySQL */
define('DB_PASSWORD', 'root');

/** Hostname MySQL  */
define('DB_HOST', 'localhost');

/** Charset del Database da utilizare nella creazione delle tabelle. */
define('DB_CHARSET', 'utf8');

/** Il tipo di Collazione del Database. Da non modificare se non si ha
idea di cosa sia. */
define('DB_COLLATE', '');

/**#@+
 * Chiavi Univoche di Autenticazione e di Salatura.
 *
 * Modificarle con frasi univoche differenti!
 * E' possibile generare tali chiavi utilizzando {@link https://api.wordpress.org/secret-key/1.1/salt/ servizio di chiavi-segrete di WordPress.org}
 * E' possibile cambiare queste chiavi in qualsiasi momento, per invalidare tuttii cookie esistenti. Ciò forzerà tutti gli utenti ad effettuare nuovamente il login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3d</*ku+Sxl_4MXQ};|_D=d`1EK92Pgk{|u!3@+G_-2&A}GH&?IbPdO7T}EegqDm');
define('SECURE_AUTH_KEY',  '|D$Vjx-iO[dqOu<D;fs^}~Ab1Ln+2V|X($L7}>NW&:w{nbVHCI8Tp^@Bm$W`WvM;');
define('LOGGED_IN_KEY',    'E.3ZEHaBXGBgqu`^hE;~%{F O-+j_V!E/DwBIF$vUT1 DGOh_8G|bE>nj@LAa(<H');
define('NONCE_KEY',        'kVO+2@$-Y/OUCo0~w7b.CU Nq+++n6,>_FoisJIa;-#$Bw<6Z].VCUZDPBHZK;-.');
define('AUTH_SALT',        'be,W]G?.CtzCk|o_G_~crB.89*i#cG9Z(D#.A~M ?)cKMA||E(A:#h19G&FJf!c$');
define('SECURE_AUTH_SALT', 'J7oKs)*(guu{y7g(93+t&WK&yu2bLW(|qA^,GZ3 W)|{I@bj8}J-D,+ Jg%6i[MR');
define('LOGGED_IN_SALT',   'LA%ivp#uME3w=Ky|~I]C-]W%P4-yft7Y0NKZC(;)j-nOvi%.)C|*tVPL+hy}95<)');
define('NONCE_SALT',       ',vdP_zp9{9|sxEragWa,CN<F:vWi7v1&5U,s_v9fKuwIo$1ad.^c;FEa7lF=hV8j');

/**#@-*/

/**
 * Prefisso Tabella del Database WordPress .
 *
 * E' possibile avere installazioni multiple su di un unico database if you give each a unique
 * fornendo a ciascuna installazione un prefisso univoco.
 * Solo numeri, lettere e sottolineatura!
 */
$table_prefix  = 'wp_';

/**
 * Per gli sviluppatori: modalità di debug di WordPress.
 *
 * Modificare questa voce a TRUE per abilitare la visualizzazione degli avvisi
 * durante lo sviluppo.
 * E' fortemente raccomandato agli svilupaptori di temi e plugin di utilizare
 * WP_DEBUG all'interno dei loro ambienti di sviluppo.
 */
define('WP_DEBUG', false);

/* Finito, interrompere le modifiche! Buon blogging. */

/** Path assoluto alla directory di WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Imposta lle variabili di WordPress ed include i file. */
require_once(ABSPATH . 'wp-settings.php');
