/*date.status.cancelled
 *  ++++++++++++++++++++++
 *  Add to Calendar Button
 *  ++++++++++++++++++++++
 *
 *  Version: 2.2.2
 *  Creator: Jens Kuerschner (https://jenskuerschner.de)
 *  Project: https://github.com/add2cal/add-to-calendar-button
 *  License: Elastic License 2.0 (ELv2) (https://github.com/add2cal/add-to-calendar-button/blob/main/LICENSE.txt)
 *  Note:    DO NOT REMOVE THE COPYRIGHT NOTICE ABOVE!
 *
 */

import { atcb_rewrite_html_elements } from './atcb-util.js';

// TRANSLATIONS

/* How to add new languages:
 * 1. Duplicate the "en" block at the following "i18nStrings" object.
 * 2. Change the key to the ISO 639-1 code of your language (https://www.w3schools.com/tags/ref_language_codes.asp).
 * 3. Translate the labels.
 * 4. Add the language to the "rtlLanguages" array below, if it write from right to left.
 * 4. Update the "language" part at the configuration page of the demo page - add the new lagnuages to the "Options" info (/demo/src/views/ConfigView.vue).
 * 5. Also update the language.ts file at the demo page, so the language appears at the demo playground (/demo/src/components/models/language.ts).
 */

// right-to-left languages
const rtlLanguages = ['ar'];

// the database object
const i18nStrings = {
  en: {
    'label.addtocalendar': 'Add to Calendar',
    'label.icalfile': 'iCal File',
    close: 'Close',
    'modal.button.default': 'Click me',
    'modal.webview.ical.h': 'Open your browser',
    'modal.webview.ical.text': 'Unfortunately, in-app browsers have problems with the way we generate the calendar file.',
    'modal.clipboard.text': 'We automatically copied a magical URL into your clipboard.',
    'modal.webview.ical.steps': '<ol><li><strong>Open another browser</strong> on your phone, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>',
    'modal.crios.ical.h': 'Open Safari',
    'modal.crios.ical.text': 'Unfortunately, Chrome on iOS has problems with the way we generate the calendar file.',
    'modal.crios.ical.steps': '<ol><li><strong>Open Safari</strong>, ...</li><li><strong>Paste</strong> the clipboard content and go.</li></ol>',
    'modal.multidate.h': 'This is an event series',
    'modal.multidate.text': 'Add the individual events one by one:',
    'date.status.cancelled': 'This date got cancelled.',
    'date.status.cancelled.cta': 'Please update your calendar!',
    'modal.subscribe.yahoo.h': 'Add Calendar to Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Open now the Yahoo Calendar.</li><li>Click the "Actions" tab.</li><li>Hit "Follow Other Calendars".</li><li>Set a name and past the clipboard content into the url field.</li></ol>',
    cancel: 'Cancel',
  },
  de: {
    'label.addtocalendar': 'Im Kalender speichern',
    'label.icalfile': 'iCal-Datei',
    close: 'Schließen',
    'modal.button.default': 'Klick mich',
    'modal.webview.ical.h': 'Öffne deinen Browser',
    'modal.webview.ical.text': 'Leider haben In-App-Browser Probleme mit der Art, wie wir Kalender-Dateien erzeugen.',
    'modal.clipboard.text': 'Wir haben automatisch eine magische URL in deine Zwischenablage kopiert.',
    'modal.webview.ical.steps': '<ol><li><strong>Öffne einen anderen Browser</strong> auf deinem Smartphone, ...</li><li>Nutze die <strong>Einfügen</strong>-Funktion, um fortzufahren.</li></ol>',
    'modal.crios.ical.h': 'Öffne Safari',
    'modal.crios.ical.text': 'Leider hat Chrome unter iOS Probleme mit der Art, wie wir Kalender-Dateien erzeugen.',
    'modal.crios.ical.steps': '<ol><li><strong>Öffne Safari</strong>, ...</li><li>Nutze die <strong>Einfügen</strong>-Funktion, um fortzufahren.</li></ol>',
    'modal.multidate.h': 'Dies ist eine Termin-Reihe',
    'modal.multidate.text': 'Füge die einzelnen Termine der Reihe nach deinem Kalender hinzu:',
    'date.status.cancelled': 'Dieser Termin wurde abgesagt.',
    'date.status.cancelled.cta': 'Bitte aktualisiere deinen Kalender!',
    'modal.subscribe.yahoo.h': 'Kalender zu Yahoo hinzufügen',
    'modal.subscribe.yahoo.text': '<ol><li>Öffne den Yahoo Kalender.</li><li>Klicke auf den "Aktionen" Tab.</li><li>Wähle "Weiteren Kalendern folgen".</li><li>Wähle einen Namen und füge die URL aus deiner Zwischenablage in das URL-Feld ein.</li></ol>',
    cancel: 'Abbrechen',
  },
  es: {
    'label.addtocalendar': 'Añadir al Calendario',
    'label.icalfile': 'iCal Ficha',
    close: 'Ciérralo',
    'modal.button.default': 'Haz clic mí',
    'modal.webview.ical.h': 'Abra su browser',
    'modal.webview.ical.text': 'Lamentablemente, los browsers in-app tienen problemas con la forma en que generamos el archivo del calendario.',
    'modal.clipboard.text': 'Hemos copiado automáticamente una URL mágica en su portapapeles.',
    'modal.webview.ical.steps': '<ol><li><strong>Abre otro browser</strong> en tu smartphone, ...</li><li>Utilice la función de <strong>pegar</strong> para continuar.</li></ol>',
    'modal.crios.ical.h': 'Abrir Safari',
    'modal.crios.ical.text': 'Lamentablemente, Chrome en iOS tiene problemas con la forma de generar el archivo de calendario.',
    'modal.crios.ical.steps': '<ol><li><strong>Abrir Safari</strong>, ...</li><li>Utilice la función de <strong>pegar</strong> para continuar.</li></ol>',
    'modal.multidate.h': 'Esta es una serie de fechas',
    'modal.multidate.text': 'Añada las fechas individuales a su calendario en orden:',
    'date.status.cancelled': 'Esta fecha fue cancelada.',
    'date.status.cancelled.cta': 'Actualice su calendario!',
    'modal.subscribe.yahoo.h': 'Añadir calendario a Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Abra el calendario de Yahoo.</li><li>Haga clic en la pestaña "Acciones".</li><li>Seleccione "Seguir otros calendarios".</li><li>Elige un nombre y pega la URL de tu portapapeles en el campo URL.</li></ol>',
    cancel: 'Cancelar',
  },
  pt: {
    'label.addtocalendar': 'Incluir no Calendário',
    'label.icalfile': 'Ficheiro iCal',
    close: 'Fechar',
    'modal.button.default': 'Clicar-me',
    'modal.webview.ical.h': 'Abra o seu browser',
    'modal.webview.ical.text': 'Infelizmente, os navegadores em tampas têm problemas com a forma como geramos o ficheiro de calendário.',
    'modal.clipboard.text': 'Copiámos automaticamente um URL mágico para a sua área de transferência.',
    'modal.webview.ical.steps': '<ol><li><strong>Abrir outro browser</strong> en tu smartphone, ...</li><li>Use a função <forte>colar</strong> para continuar.</li></ol>',
    'modal.crios.ical.h': 'Safari aberto',
    'modal.crios.ical.text': 'Infelizmente, o cromado no iOS tem problemas com a forma como geramos o ficheiro do calendário.',
    'modal.crios.ical.steps': '<ol><li><strong>Safari aberto</strong>, ...</li><li>Use a função <forte>colar</strong> para continuar.</li></ol>',
    'modal.multidate.h': 'Esta é uma série de datas',
    'modal.multidate.text': 'Adicione as datas individuais ao seu calendário, por ordem:',
    'date.status.cancelled': 'Esta data foi cancelada.',
    'date.status.cancelled.cta': 'Actualize o seu calendário!',
    'modal.subscribe.yahoo.h': 'Adicionar calendário ao Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Abrir o calendário do Yahoo.</li><li>Clique no separador "Acções".</li><li>Seleccione "Seguir outros calendários".</li><li>Escolha um nome e cole o URL da sua área de transferência no campo URL.</li></ol>',
    cancel: 'Cancelar',
  },
  fr: {
    'label.addtocalendar': "Ajouter à l'Agenda",
    'label.icalfile': 'Fichier iCal',
    close: 'Fermer',
    'modal.button.default': 'Cliquez-moi',
    'modal.webview.ical.h': 'Ouvrez votre navigateur',
    'modal.webview.ical.text': "Malheureusement, les navigateurs in-app ont des problèmes avec la manière dont nous créons les fichiers d'agenda.",
    'modal.clipboard.text': 'Nous avons automatiquement copié une URL magique dans votre presse-papiers.',
    'modal.webview.ical.steps': '<ol><li><strong>Ouvrez un autre navigateur</strong> sur votre smartphone, ...</li><li><strong>Collez</strong> le contenu du presser-papier et continuez.</li></ol>',
    'modal.crios.ical.h': 'Ouvrir Safari',
    'modal.crios.ical.text': 'Malheureusement, Chrome sur iOS a des problèmes avec la façon dont nous générons le fichier agenda.',
    'modal.crios.ical.steps': '<ol><li><strong>Ouvrez Safari</strong>, ...</li><li><strong>Collez</strong> le contenu du presse-papier et continuez.</li></ol>',
    'modal.multidate.h': 'Ceci est un évènement récurrent',
    'modal.multidate.text': 'Ajouter les différents évènements un par un:',
    'date.status.cancelled': 'Cette date est annulée.',
    'date.status.cancelled.cta': 'Actualisez votre agenda!',
    'modal.subscribe.yahoo.h': 'Ajouter un agenda à Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Ouvrez l\'Agenda Yahoo.</li><li>Cliquez sur l\'onglet "Actions".</li><li>Sélectionnez "Suivre d\'autres agendas".</li><li>Choisissez un nom et collez le contenu de votre presse-papiers dans le champ URL.</li></ol>',
    cancel: 'Annuler',
  },
  nl: {
    'label.addtocalendar': 'Opslaan in Agenda',
    'label.icalfile': 'iCal File',
    close: 'Sluiten',
    'modal.button.default': 'Klik me',
    'modal.webview.ical.h': 'Open uw browser',
    'modal.webview.ical.text': 'Helaas hebben in-app browsers problemen met de manier waarop wij kalenderbestanden maken.',
    'modal.clipboard.text': 'We hebben automatisch een magische URL naar je klembord gekopieerd.',
    'modal.webview.ical.steps': '<ol><li><strong>Open een andere browser</strong> op uw smartphone, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>',
    'modal.crios.ical.h': 'Open Safari',
    'modal.crios.ical.text': 'Helaas heeft Chrome op iOS problemen met de manier waarop we het kalenderbestand genereren.',
    'modal.crios.ical.steps': '<ol><li><strong>Open Safari</strong>, ...</li><li>Gebruik de <strong>insert</strong> functie om verder te gaan.</li></ol>',
    'modal.multidate.h': 'Dit is een reeks data',
    'modal.multidate.text': 'Voeg de afzonderlijke delen één voor één toe:',
    'date.status.cancelled': 'Deze datum is geannuleerd.',
    'date.status.cancelled.cta': 'Uw agenda bijwerken!',
    'modal.subscribe.yahoo.h': 'Toevoegen aan Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Open de Yahoo calendar.</li><li>Klik op de "Acties" tab.</li><li>Selecteer "Volg Andere Agenda\'s".</li><li>Kies een naam en plak de URL van uw klembord in het URL-veld.</li></ol>',
    cancel: 'Annuleren',
  },
  tr: {
    'label.addtocalendar': 'Takvime Ekle',
    'label.icalfile': 'iCal Dosyası',
    close: 'Kapat',
    'modal.button.default': 'Beni tıklayın',
    'modal.webview.ical.h': 'Tarayıcınızı açın',
    'modal.webview.ical.text': 'Ne yazık ki, uygulama içi tarayıcılar takvim dosyalarını oluşturma şeklimizle ilgili sorunlar yaşıyor.',
    'modal.clipboard.text': 'Panonuza otomatik olarak sihirli bir URL kopyaladık.',
    'modal.webview.ical.steps': '<ol><li><strong>Akıllı telefonunuzda başka bir tarayıcı açın</strong>, ...</li><li>Devam etmek için <strong>insert</strong> fonksiyonunu kullanın.</li></ol>',
    'modal.crios.ical.h': 'Açık Safari',
    'modal.crios.ical.text': "Ne yazık ki iOS'ta Chrome'un takvim dosyası oluşturma yöntemiyle ilgili sorunları var.",
    'modal.crios.ical.steps': '<ol><li><strong>Açık Safari</strong>, ...</li><li>Devam etmek için <strong>insert</strong> fonksiyonunu kullanın.</li></ol>',
    'modal.multidate.h': 'Bu bir etkinlik serisidir',
    'modal.multidate.text': 'Parçaları teker teker ekleyin:',
    'date.status.cancelled': 'Bu tarih iptal edildi.',
    'date.status.cancelled.cta': 'Lütfen takviminizi güncelleyin!',
    'modal.subscribe.yahoo.h': "Yahoo'ya takvim ekleme",
    'modal.subscribe.yahoo.text': '<ol><li>Yahoo takvimini açın.</li><li>"Eylemler" sekmesine tıklayın.</li><li>"Diğer Takvimleri Takip Et" öğesini seçin.</li><li>Bir ad seçin ve URL\'yi panonuzdan URL alanına yapıştırın.</li></ol>',
    cancel: 'İptal',
  },
  zh: {
    'label.addtocalendar': '添加到日历',
    'label.icalfile': 'iCal 文件',
    close: '关',
    'modal.button.default': '点我',
    'modal.webview.ical.h': '打开浏览器',
    'modal.webview.ical.text': '不幸的是，应用内浏览器在我们生成日历文件的方式上存在问题。',
    'modal.clipboard.text': '我们自动将魔术 URL 复制到您的剪贴板。',
    'modal.webview.ical.steps': '<ol><li>打开手机上的任何其他浏览器, ...</li><li>粘贴剪贴板内容并开始。</li></ol>',
    'modal.crios.ical.h': '打开 Safari',
    'modal.crios.ical.text': '不幸的是，iOS 上的 Chrome 在我们生成日历文件的方式上存在问题。',
    'modal.crios.ical.steps': '<ol><li><strong>打开 Safari</strong>, ...</li><li>粘贴剪贴板内容并开始。</li></ol>',
    'modal.multidate.h': '这是一个活动系列',
    'modal.multidate.text': '逐个添加各个部分:',
    'date.status.cancelled': '此日期已取消。',
    'date.status.cancelled.cta': '请更新您的日历!',
    'modal.subscribe.yahoo.h': '将日历添加到 Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>打开 Yahoo 日历。</li><li>点击“操作”标签。</li><li>选择“关注其他日历”。</li><li>选择一个名称并将剪贴板中的 URL 粘贴到 URL 字段中。</li></ol>',
    cancel: '中止',
  },
  ar: {
    'label.addtocalendar': 'إضافة إلى التقويم',
    'label.icalfile': 'ملف iCal',
    close: 'قريب',
    'modal.button.default': 'انقر فوق لي',
    'modal.webview.ical.h': 'افتح المستعرض الخاص بك',
    'modal.webview.ical.text': 'لسوء الحظ ، تواجه المتصفحات داخل التطبيق مشاكل في طريقة إنشاء ملف التقويم.',
    'modal.clipboard.text': 'قمنا تلقائيًا بنسخ عنوان URL سحري إلى الحافظة الخاصة بك.',
    'modal.webview.ical.steps': '<ol><li>افتح أي متصفح آخر على هاتفك الذكي, ...</li><li>.الصق محتوى الحافظة واذهب</li></ol>',
    'modal.crios.ical.h': 'افتح Safari',
    'modal.crios.ical.text': 'لسوء الحظ ، يواجه Chrome على iOS مشاكل في طريقة إنشاء ملف التقويم',
    'modal.crios.ical.steps': '<ol><li><strong>افتح Safari</strong>, ...</li><li>الصق محتوى الحافظة واذهب.</li></ol>',
    'modal.multidate.h': 'هذه سلسلة أحداث',
    'modal.multidate.text': 'أضف الأجزاء الفردية واحدة تلو الأخرى:',
    'date.status.cancelled': 'تم إلغاء هذا التاريخ.',
    'date.status.cancelled.cta': 'الرجاء تحديث التقويم الخاص بك!',
    'modal.subscribe.yahoo.h': 'أضف التقويم إلى Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>افتح تقويم Yahoo.</li><li>انقر فوق علامة التبويب "الإجراءات".</li><li>حدد "متابعة تقويمات أخرى".</li><li>اختر اسمًا والصق عنوان URL من الحافظة الخاصة بك في حقل URL.</li></ol>',
    cancel: 'إحباط',
  },
  hi: {
    'label.addtocalendar': 'कैलेंडर में जोड़ें',
    'label.icalfile': 'iCal फ़ाइल',
    close: 'बंद करना',
    'modal.button.default': 'मुझे क्लिक करें',
    'modal.webview.ical.h': 'अपना ब्राउज़र खोलें',
    'modal.webview.ical.text': 'दुर्भाग्य से, इन-ऐप ब्राउज़र में कैलेंडर फ़ाइल बनाने के तरीके में समस्याएँ हैं।',
    'modal.clipboard.text': 'हमने आपके क्लिपबोर्ड पर स्वचालित रूप से एक जादुई URL कॉपी कर लिया है।',
    'modal.webview.ical.steps': '<ol><li>अपने फ़ोन पर <strong>दूसरा ब्राउज़र खोलें</strong>, ...</li><li>क्लिपबोर्ड सामग्री <strong>चिपकाएं</strong> और जाएं।</li></ol>',
    'modal.crios.ical.h': 'सफारी खोलें',
    'modal.crios.ical.text': 'दुर्भाग्य से, iOS पर Chrome को कैलेंडर फ़ाइल जेनरेट करने के हमारे तरीके में समस्या है।',
    'modal.crios.ical.steps': '<ol><li><strong>सफारी खोलें</strong>, ...</li><li>क्लिपबोर्ड सामग्री <strong>चिपकाएं</strong> और जाएं।</li></ol>',
    'modal.multidate.h': 'यह एक इवेंट सीरीज़ है',
    'modal.multidate.text': 'अलग-अलग हिस्सों को एक-एक करके जोड़ें:',
    'date.status.cancelled': 'यह तिथि रद्द हो गई।',
    'date.status.cancelled.cta': 'कृपया अपना कैलेंडर अपडेट करें!',
    'modal.subscribe.yahoo.h': 'Yahoo . में कैलेंडर जोड़ें',
    'modal.subscribe.yahoo.text': '<ol><li>Yahoo कैलेंडर खोलें।</li><li>"कृती" टैब पर क्लिक करें।</li><li>"इतर कॅलेंडर्सचे अनुसरण करा" चुनें।</li><li>एक नाम चुनें और अपने क्लिपबोर्ड से URL को URL फ़ील्ड में पेस्ट करें।</li></ol>',
    cancel: 'रद्द करना',
  },
  pl: {
    'label.addtocalendar': 'Dodaj do kalendarza',
    'label.icalfile': 'Plik iCal',
    close: 'Zamknij',
    'modal.button.default': 'Kliknij mnie',
    'modal.webview.ical.h': 'Otwórz przeglądarkę',
    'modal.webview.ical.text': 'Niestety, przeglądarki in-app mają problemy ze sposobem, w jaki generujemy plik kalendarza.',
    'modal.clipboard.text': 'Automatycznie skopiowaliśmy magiczny adres URL do schowka.',
    'modal.webview.ical.steps': '<ol><li><strong>Otwórz inną przeglądarkę</strong> w swoim telefonie, ...</li><li><strong>Wklej</strong> zawartość schowka i ruszaj.</li></ol>',
    'modal.crios.ical.h': 'Otwórz Safari',
    'modal.crios.ical.text': 'Niestety, Chrome na iOS ma problemy ze sposobem generowania pliku kalendarza.',
    'modal.crios.ical.steps': '<ol><li><strong>Otwórz Safari</strong>, ...</li><li><strong>Wklej</strong> zawartość schowka i ruszaj.</li></ol>',
    'modal.multidate.h': 'To jest cykl imprez',
    'modal.multidate.text': 'Dodawać po kolei poszczególne części:',
    'date.status.cancelled': 'Ta data została odwołana.',
    'date.status.cancelled.cta': 'Zaktualizuj swój kalendarz!',
    'modal.subscribe.yahoo.h': 'Dodaj kalendarz do Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Otwórz kalendarz Yahoo.</li><li>Kliknij na zakładkę "Czynności".</li><li>Wybierz "Obserwuj inne kalendarze".</li><li>Wybierz nazwę i wklej adres URL ze schowka w polu URL.</li></ol>',
    cancel: 'Anuluj',
  },
  id: {
    'label.addtocalendar': 'Tambahkan ke Kalender',
    'label.icalfile': 'File iCal',
    close: 'Tutup',
    'modal.button.default': 'Klik saya',
    'modal.webview.ical.h': 'Buka browser Anda',
    'modal.webview.ical.text': 'Sayangnya, browser dalam aplikasi memiliki masalah dengan cara kami menghasilkan file kalender.',
    'modal.clipboard.text': 'Kami telah secara otomatis menyalin URL ajaib ke clipboard Anda.',
    'modal.webview.ical.steps': '<ol><li><strong>Buka peramban lain</strong> pada ponsel Anda, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>',
    'modal.crios.ical.h': 'Buka Safari',
    'modal.crios.ical.text': 'Sayangnya, Chrome di iOS memiliki masalah dengan cara kami menghasilkan file kalender.',
    'modal.crios.ical.steps': '<ol><li><strong>Buka Safari</strong>, ...</li><li>Tempelkan konten clipboard dan pergi.</li></ol>',
    'modal.multidate.h': 'Ini adalah rangkaian acara',
    'modal.multidate.text': 'Tambahkan masing-masing bagian satu per satu:',
    'date.status.cancelled': 'Tanggal ini dibatalkan.',
    'date.status.cancelled.cta': 'Perbarui kalender Anda!',
    'modal.subscribe.yahoo.h': 'Tambahkan kalender ke Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Buka kalender Yahoo.</li><li>Klik pada tab "Tindakan".</li><li>Pilih "Ikuti Kalender Lain".</li><li>Pilih nama dan tempelkan URL dari clipboard Anda ke bidang URL.</li></ol>',
    cancel: 'Batal',
  },
  no: {
    'label.addtocalendar': 'Legg til i kalenderen',
    'label.icalfile': 'iCal-fil',
    close: 'Lukk',
    'modal.button.default': 'Klikk på meg',
    'modal.webview.ical.h': 'Åpne nettleseren din',
    'modal.webview.ical.text': 'Dessverre har nettlesere i appen problemer med måten vi genererer kalenderfilen på.',
    'modal.clipboard.text': 'Vi kopierte automatisk en magisk URL til utklippstavlen din.',
    'modal.webview.ical.steps': '<ol><li><strong>Åpne en annen nettleser</strong> på telefonen, ...</li><li><strong>Lim inn</strong> innholdet på utklippstavlen og gå.</li></ol>',
    'modal.crios.ical.h': 'Åpne Safari',
    'modal.crios.ical.text': 'Dessverre har Chrome på iOS problemer med måten vi genererer kalenderfilen på.',
    'modal.crios.ical.steps': '<ol><li><strong>Åpne Safari</strong>, ...</li><li><strong>Lim inn</strong> innholdet på utklippstavlen og gå.</li></ol>',
    'modal.multidate.h': 'Dette er en avtaleserie',
    'modal.multidate.text': 'Legg til de enkelte datoene i kalenderen din i rekkefølge:',
    'date.status.cancelled': 'Denne datoen ble avlyst.',
    'date.status.cancelled.cta': 'Oppdater kalenderen din!',
    'modal.subscribe.yahoo.h': 'Legg til kalender til Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Åpne Yahoo-kalenderen.</li><li>Klikk på «Handlinger»-fanen.</li><li>Velg «Følg andre kalendere».</li><li>Velg et navn og lim inn URL-en fra utklippstavlen i URL-feltet.</li></ol>',
    cancel: 'Avbryt',
  },
  fi: {
    'label.addtocalendar': 'Lisää kalenteriin',
    'label.icalfile': 'iCal-tiedosto',
    close: 'Sulje',
    'modal.button.default': 'Klikkaa minua',
    'modal.webview.ical.h': 'Avaa selain',
    'modal.webview.ical.text': 'Valitettavasti sovelluksen sisäisillä selaimilla on ongelmia kalenteritiedoston luomisessa.',
    'modal.clipboard.text': 'Olemme automaattisesti kopioineet maagisen URL-osoitteen leikepöydällesi.',
    'modal.webview.ical.steps': '<ol><li><strong>Avaa toinen selain</strong> puhelimessasi., ...</li><li><strong>liitä</strong> leikepöydän sisältö ja lähde.</li></ol>',
    'modal.crios.ical.h': 'Avaa Safari',
    'modal.crios.ical.text': 'Valitettavasti iOS:n Chromessa on ongelmia kalenteritiedoston luomisessa.',
    'modal.crios.ical.steps': '<ol><li><strong>Avaa Safari</strong>, ...</li><li><strong>liitä</strong> leikepöydän sisältö ja lähde.</li></ol>',
    'modal.multidate.h': 'Tämä on tapahtumasarja',
    'modal.multidate.text': 'Lisää yksittäiset osat yksi kerrallaan:',
    'date.status.cancelled': 'Tämä päivämäärä peruttiin.',
    'date.status.cancelled.cta': 'Päivitä kalenterisi!',
    'modal.subscribe.yahoo.h': 'Lisää kalenteri Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Avaa Yahoo-kalenteri.</li><li>Napsauta "Toiminnot"-välilehteä.</li><li>Valitse "Seuraa muiden kalentereita".</li><li>Valitse nimi ja liitä URL-osoite leikepöydältäsi URL-kenttään.</li></ol>',
    cancel: 'Peruuta',
  },
  sv: {
    'label.addtocalendar': 'Lägg till i kalender',
    'label.icalfile': 'iCal-fil',
    close: 'Stäng',
    'modal.button.default': 'Klicka på mig',
    'modal.webview.ical.h': 'Öppna din webbläsare',
    'modal.webview.ical.text': 'Tyvärr har webbläsare i appen problem med hur vi genererar kalenderfilen.',
    'modal.clipboard.text': 'Vi har automatiskt kopierat en magisk URL till ditt klippblock.',
    'modal.webview.ical.steps': '<ol><li><strong>Öppna en annan webbläsare</strong> på telefonen, ...</li><li><strong>Insätt</strong> innehållet i klippbordet och kör.</li></ol>',
    'modal.crios.ical.h': 'Öppna Safari',
    'modal.crios.ical.text': 'Tyvärr har Chrome på iOS problem med hur vi genererar kalenderfilen.',
    'modal.crios.ical.steps': '<ol><li><strong>Öppna Safari</strong>, ...</li><li><strong>Insätt</strong> innehållet i klippbordet och kör.</li></ol>',
    'modal.multidate.h': 'Detta är en evenemangsserie',
    'modal.multidate.text': 'Lägg till de enskilda delarna en efter en:',
    'date.status.cancelled': 'Detta datum har ställts in.',
    'date.status.cancelled.cta': 'Uppdatera din kalender!',
    'modal.subscribe.yahoo.h': 'Lägg till kalender i Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Öppna Yahoo-kalendern.</li><li>Klicka på fliken "Åtgärder".</li><li>Välj "Följ andra kalendrar".</li><li>Välj ett namn och klistra in URL:en från klippbordet i URL-fältet.</li></ol>',
    cancel: 'Avbryt',
  },
  cs: {
    'label.addtocalendar': 'Přidat do kalendáře',
    'label.icalfile': 'Soubor iCal',
    close: 'Zavřít',
    'modal.button.default': 'Klikněte na mě',
    'modal.webview.ical.h': 'Otevřete prohlížeč',
    'modal.webview.ical.text': 'Prohlížeče v aplikacích mají bohužel problémy se způsobem generování souboru kalendáře.',
    'modal.clipboard.text': 'Do schránky jsme automaticky zkopírovali kouzelnou adresu URL.',
    'modal.webview.ical.steps': '<ol><li><strong>Otevření jiného prohlížeče</strong> v telefonu, ...</li><li><strong>Vložte</strong> obsah schránky a přejděte.</li></ol>',
    'modal.crios.ical.h': 'Otevřít Safari',
    'modal.crios.ical.text': 'Chrome v systému iOS má bohužel problémy se způsobem generování souboru kalendáře.',
    'modal.crios.ical.steps': '<ol><li><strong>Otevřít Safari</strong>, ...</li><li><strong>Vložte</strong> obsah schránky a přejděte.</li></ol>',
    'modal.multidate.h': 'Jedná se o sérii událostí',
    'modal.multidate.text': 'Přidávejte jednotlivé díly jeden po druhém:',
    'date.status.cancelled': 'Toto datum bylo zrušeno.',
    'date.status.cancelled.cta': 'Aktualizujte svůj kalendář!',
    'modal.subscribe.yahoo.h': 'Přidat kalendář do Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Otevřete kalendář Yahoo.</li><li>Klikněte na kartu "Akce".</li><li>Vyberte možnost "Sledovat další kalendáře".</li><li>Vyberte název a vložte adresu URL ze schránky do pole URL.</li></ol>',
    cancel: 'Storno',
  },
  ja: {
    'label.addtocalendar': 'カレンダーに追加',
    'label.icalfile': 'iCalファイル',
    close: '閉じる',
    'modal.button.default': 'クリックしてください',
    'modal.webview.ical.h': 'ブラウザを起動する',
    'modal.webview.ical.text': '残念ながら、アプリ内ブラウザは、カレンダーファイルの生成方法に問題があります。',
    'modal.clipboard.text': '魔法のURLを自動的にクリップボードにコピーしています。',
    'modal.webview.ical.steps': '<ol><li>スマートフォンで別のブラウザを起動する, ...</li><li>クリップボードの内容を貼り付けて行く。</li></ol>',
    'modal.crios.ical.h': 'オープンSafari',
    'modal.crios.ical.text': '残念ながら、iOS版Chromeでは、カレンダーファイルの生成方法に問題があります。',
    'modal.crios.ical.steps': '<ol><li><strong>オープンSafari</strong>, ...</li><li>クリップボードの内容を貼り付けて行く。</li></ol>',
    'modal.multidate.h': 'イベントシリーズです',
    'modal.multidate.text': '個々のパーツを一つずつ追加していく:',
    'date.status.cancelled': 'この日はキャンセルになりました。',
    'date.status.cancelled.cta': 'カレンダーを更新する!',
    'modal.subscribe.yahoo.h': 'Yahooにカレンダーを追加する',
    'modal.subscribe.yahoo.text': '<ol><li>Yahooカレンダーを開く。</li><li>[実行] タブをクリックします。</li><li>[その他のカレンダーのフォロー] を選択します。</li><li>名前を決めて、クリップボードにあるURLをURL欄に貼り付けます。</li></ol>',
    cancel: 'キャンセル',
  },
  it: {
    'label.addtocalendar': 'Aggiungi al calendario',
    'label.icalfile': 'File iCal',
    close: 'Chiudere',
    'modal.button.default': 'Clicca su di me',
    'modal.webview.ical.h': 'Aprire il browser',
    'modal.webview.ical.text': 'Purtroppo i browser in-app hanno problemi con il modo in cui generiamo il file del calendario.',
    'modal.clipboard.text': 'Abbiamo copiato automaticamente un URL magico negli appunti.',
    'modal.webview.ical.steps': '<ol><li><strong>Aprire un altro browser</strong> sul cellulare, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>',
    'modal.crios.ical.h': 'Aprire Safari',
    'modal.crios.ical.text': 'Purtroppo, Chrome su iOS ha problemi con il modo in cui generiamo il file del calendario.',
    'modal.crios.ical.steps': '<ol><li><strong>Aprire Safari</strong>, ...</li><li><strong>Incollare</strong> il contenuto degli appunti e partire.</li></ol>',
    'modal.multidate.h': 'Questa è una serie di eventi',
    'modal.multidate.text': 'Aggiungere le singole parti una per una:',
    'date.status.cancelled': 'La data è stata annullata.',
    'date.status.cancelled.cta': 'Aggiornare il calendario!',
    'modal.subscribe.yahoo.h': 'Aggiungi il calendario a Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Aprire il calendario di Yahoo.</li><li>Fare clic sulla scheda "Azioni".</li><li>Selezionare "Segui altri calendari".</li><li>Scegliere un nome e incollare l\'URL dagli appunti nel campo URL.</li></ol>',
    cancel: 'Annulla',
  },
  ko: {
    'label.addtocalendar': '캘린더에 추가',
    'label.icalfile': 'iCal 파일',
    close: '닫다',
    'modal.button.default': '클릭 해주세요',
    'modal.webview.ical.h': '브라우저 열기',
    'modal.webview.ical.text': '불행히도 인앱 브라우저는 캘린더 파일을 생성하는 방식에 문제가 있습니다.',
    'modal.clipboard.text': '매직 URL을 클립보드에 자동으로 복사했습니다.',
    'modal.webview.ical.steps': '<ol><li>휴대전화에서 다른 브라우저 열기, ...</li><li>클립보드 내용을 붙여넣고 이동합니다.</li></ol>',
    'modal.crios.ical.h': 'Safari 열기',
    'modal.crios.ical.text': '불행히도 iOS의 Chrome은 캘린더 파일을 생성하는 방식에 문제가 있습니다.',
    'modal.crios.ical.steps': '<ol><li><strong>Safari 열기</strong>, ...</li><li>클립보드 내용을 붙여넣고 이동합니다.</li></ol>',
    'modal.multidate.h': '이벤트 시리즈입니다',
    'modal.multidate.text': '개별 부품을 하나씩 추가:',
    'date.status.cancelled': '이 날짜는 취소되었습니다.',
    'date.status.cancelled.cta': '캘린더를 업데이트하세요!',
    'modal.subscribe.yahoo.h': 'Yahoo에 캘린더 추가',
    'modal.subscribe.yahoo.text': '<ol><li>Yahoo 캘린더를 엽니다.</li><li>"동작" 탭을 클릭합니다.</li><li>"다른 일정관리 팔로우"를 선택합니다.</li><li>이름을 선택하고 클립보드의 URL을 URL 필드에 붙여넣습니다.</li></ol>',
    cancel: '취소',
  },
  vi: {
    'label.addtocalendar': 'Thêm vào Lịch',
    'label.icalfile': 'Tệp iCal',
    close: 'Đóng',
    'modal.button.default': 'Nhấp vào đây',
    'modal.webview.ical.h': 'Mở trình duyệt của bạn',
    'modal.webview.ical.text': 'Rất tiếc, các trình duyệt trong ứng dụng gặp sự cố với cách chúng tôi tạo tệp lịch.',
    'modal.clipboard.text': 'Chúng tôi đã tự động sao chép một URL ma thuật vào khay nhớ tạm của bạn.',
    'modal.webview.ical.steps': '<ol><li><strong> Mở trình duyệt khác </strong> trên điện thoại của bạn, ...</li><li><strong> Dán </strong> nội dung khay nhớ tạm và bắt đầu.</li></ol>',
    'modal.crios.ical.h': 'Mở Safari',
    'modal.crios.ical.text': 'Rất tiếc, Chrome trên iOS gặp sự cố với cách chúng tôi tạo tệp lịch.',
    'modal.crios.ical.steps': '<ol><li><strong>Mở Safari</strong>, ...</li><li><strong> Dán </strong> nội dung khay nhớ tạm và bắt đầu.</li></ol>',
    'modal.multidate.h': 'Đây là một chuỗi sự kiện',
    'modal.multidate.text': 'Thêm từng phần riêng lẻ một:',
    'date.status.cancelled': 'Ngày này đã bị hủy.',
    'date.status.cancelled.cta': 'Cập nhật lịch của bạn!',
    'modal.subscribe.yahoo.h': 'Thêm lịch vào Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Mở Lịch Yahoo.</li><li>Nhấp vào tab "Hành động".</li><li>Chọn "Theo dõi các Lịch khác".</li><li>Chọn tên và dán URL từ khay nhớ tạm của bạn vào trường URL.</li></ol>',
    cancel: 'Hủy bỏ',
  },
  ro: {
    'label.addtocalendar': 'Adauga In Calendar',
    'label.icalfile': 'Fisier iCal',
    close: 'Inchide',
    'modal.button.default': 'Apasa-ma',
    'modal.webview.ical.h': 'Deschide browserul',
    'modal.webview.ical.text': 'Din pacate, browserele din aplicatie au probleme cu generarea de fisiere pentru calendar.',
    'modal.clipboard.text': 'Ti-am copiat automat un URL magic in clipboard',
    'modal.webview.ical.steps': '<ol><li><strong>Deschide un alt browser</strong> pe telefonul tau, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>',
    'modal.crios.ical.h': 'Deschide Safari',
    'modal.crios.ical.text': 'Din nefericire, Chrome pe iOS are probleme cu modalitatile prin care noi generam fisierele pentru scalendar.',
    'modal.crios.ical.steps': '<ol><li><strong>Deschides Safari</strong>, ...</li><li><strong>Lipeste</strong> continutul din clipboard si continua.</li></ol>',
    'modal.multidate.h': 'Aceasta este o serie de evenimente',
    'modal.multidate.text': 'Adauga evenimentele individuale una cate una:',
    'date.status.cancelled': 'Aceasta data a fost anulata.',
    'date.status.cancelled.cta': 'Te rugam sa-ti updatezi calendarul!',
    'modal.subscribe.yahoo.h': 'Adauga Calendar in Yahoo',
    'modal.subscribe.yahoo.text': '<ol><li>Deschide acum calendarul Yahoo.</li><li>Apasa pe tab-ul de "Actiuni".</li><li>Apasa "Urmareste alte calendare".</li><li>Seteaza un nume si lipeste continutul din clipboard in casuta cu url.</li></ol>',
    cancel: 'Anuleaza',
  },
};

const availableLanguages = Object.keys(i18nStrings);

// hook, which can be used to override all potential "hard" strings by setting the key as option key and the intended string as value
function atcb_translate_hook(identifier, data) {
  if (data.customLabels != null && data.customLabels[`${identifier}`] != null && data.customLabels[`${identifier}`] != '') {
    return atcb_rewrite_html_elements(data.customLabels[`${identifier}`]);
  } else {
    return atcb_translate(identifier, data.language);
  }
}

function atcb_translate(identifier, language) {
  // set default language
  if (!language) {
    language = 'en';
  }
  // return string, if available
  if (i18nStrings[`${language}`][`${identifier}`]) {
    return i18nStrings[`${language}`][`${identifier}`];
  }
  // if nothing found, return the original identifier
  return identifier;
}

export { atcb_translate_hook, availableLanguages, rtlLanguages };
