import Logo from "@/components/elements/Logo/Logo"
import { useLang } from "@/hooks/useLang"

const Footer = () => {
    const {lang, translations } = useLang()

    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container footer__top__container">
                    <div className="footer__logo">
                        <Logo/>
                    </div>
                    <div className="footer__contacts">
                        <span>
                            <a href='tel:+79195838414'>+7 (919) 583-84-14</a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="footer__bottom"/>
        </footer>
    )
}

export default Footer