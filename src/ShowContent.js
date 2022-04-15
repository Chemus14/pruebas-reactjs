import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"
import { useState } from "react"

/**
 * An example of AnimatePresence with exit defined as a variant through a tree.
 */



const item = {
    width: 100,
    height: 100,
    background: "red",
}


function ShowContent(){
    const [selectedId, setSelectedId] = useState(null);
    return (
        <AnimatePresence>
                {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence>
    )
}
  export default ShowContent