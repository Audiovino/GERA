import React from 'react';
import useTranslations from '../hooks/useTranslations';

const Footer: React.FC = () => {
    const { t } = useTranslations();
    
    const socialLinks = [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, href: 'https://www.linkedin.com/in/gerardoleiserson'},
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>, href: 'https://www.facebook.com/gerardoleiserson' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8.051 1.999h.083c.853 0 1.536.002 2.06.03.517.027.886.114 1.213.24.332.127.602.316.87.586.27.27.46.54.587.87.125.326.212.696.24 1.213.028.524.03 1.207.03 2.06 0 .852-.002 1.536-.03 2.06-.027.517-.114.886-.24 1.213-.127.332-.316.602-.586.87-.27.27-.54.46-.87.587-.326.125-.696.212-1.213.24-.524.028-1.207.03-2.06.03h-.083c-.853 0-1.536-.002-2.06-.03-.517-.027-.886-.114-1.213-.24-.332-.127-.602-.316-.87-.586-.27.27-.46.54-.587.87-.125-.326-.212.696-.24-1.213-.028.524-.03-1.207-.03-2.06 0-.852.002-1.536.03-2.06.027-.517.114.886.24 1.213.127.332.316.602.586.87.27.27.54.46.87.587.326.125.696.212 1.213.24.524-.028 1.207.03 2.06-.03M8 0c-1.141 0-2.135.02-2.88.057-.75.037-1.405.15-2.008.362-.61.214-1.17.51-1.664.995-.495.485-.782.954-1.002 1.567-.215.603-.33 1.258-.363 2.008C.02 5.865 0 6.859 0 8s.02 2.135.057 2.88c.037.75.15 1.405.362 2.008.214.61.51 1.17.995 1.664.485.495.954.782 1.567 1.002.603.215 1.258.33 2.008.363C5.865 15.98 6.859 16 8 16s2.135-.02 2.88-.057c.75-.037 1.405-.15 2.008-.362.61-.214 1.17-.51 1.664-.995.495.485.782.954 1.002-1.567.215-.603.33-1.258-.363-2.008C15.98 10.135 16 9.141 16 8s-.02-2.135-.057-2.88c-.037-.75-.15-1.405-.362-2.008-.214-.61-.51-1.17-.995-1.664C13.505 1.046 13.037.76 12.42.545c-.603-.215-1.258-.33-2.008-.363C9.55.02 8.559 0 8 0m0 4.167a3.833 3.833 0 1 0 0 7.666 3.833 3.833 0 0 0 0-7.666M8 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m4.333-7.25a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92"/></svg>, href: 'https://www.instagram.com/leisersongerardo'},
        { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8.051 1.999a.678.678 0 0 0-.693.649c-.065.503-.223 1.78-.375 2.87-1.5.11-2.793.18-3.413.23-.65.06-1.08.16-1.28.25-.21.09-.38.21-.49.33-.11.12-.2.27-.26.44-.06.17-.09.38-.09.63v.56c0 .25.03.46.09.63.06.17.15.32.26.44.11.12.28.24.49.33.2.09.63.19 1.28.25.62.05 1.91.12 3.41.23.15 1.09.31 2.37.375 2.87.02.16.12.3.27.42.15.12.34.19.54.19s.39-.07.54-.19c.15-.12.25-.26.27-.42.065-.504.223-1.78.375-2.87 1.5-.11 2.793-.18 3.413-.23-.65-.06 1.08-.16 1.28-.25.21-.09.38-.21-.49.33.11-.12.2-.27-.26.44.06-.17-.09-.38-.09-.63v-.56c0-.25-.03-.46-.09-.63-.06-.17-.15-.32-.26-.44-.11-.12-.28-.24-.49-.33-.2-.09-.63-.19-1.28-.25-.62-.05-1.91-.12-3.41-.23-.15-1.09-.31-2.37-.375-2.87a.678.678 0 0 0-.693-.65zM6.4 5.209v4.818l4.157-2.408z"/></svg>, href: 'https://www.youtube.com/@RealtorIa-v3o' },
    ];

    return (
        <footer className="bg-gray-900 border-t border-gray-700 text-gray-400">
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                                LS
                            </div>
                            <div>
                                <h1 className="font-bold text-lg text-white">LeisersonGerardo</h1>
                            </div>
                        </div>
                        <p className="text-sm mb-4">{t('footer.description')}</p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-4">{t('footer.contact')}</h3>
                        <ul className="space-y-2">
                            <li><p>+54 9 11 6360-1511</p></li>
                            <li><a href="https://wa.me/5491163601511" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t('footer.consult')}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
                    <p>{t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;