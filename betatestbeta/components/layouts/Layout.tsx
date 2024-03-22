'use client'
import { AnimatePresence, motion } from "framer-motion";
import Header from "../modules/Header/Header";
import SearchModal from "../modules/Header/SearchModal";
import { $searchModal } from "@/context/modals";
import { useUnit } from 'effector-react'

const Layout = ({ children }: { children: React.ReactNode}) => {
    const searchModal = useUnit($searchModal)
    return (
        <>
            <Header />
            {children}
            <AnimatePresence>
                {searchModal && (
                    <motion.div
                        initial={{ opacity: 0, zIndex: 3 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <SearchModal/>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='' />
        </>
    )
}

export default Layout