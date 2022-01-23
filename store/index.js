import { v4 as uuidv4 } from 'uuid';
export const state = () => ({
  allTemplates: {
    'wedding': [
      { id: 1, url: 'wedding-template.jpg', title: 'Minimalistyczny'},
      { id: 2, url: 'wedding-pastel.jpg', title: 'Pastelowy'},
      { id: 3, url: 'wedding-bw.jpg', title: 'Czarno-biały'},
      { id: 4, url: 'wedding-vintage.jpg', title: 'Vintage'},
      { id: 5, url: 'wedding-rustic.jpg', title: 'Rustykalny'},
      { id: 6, url: 'wedding-modern.jpg', title: 'Nowoczesny'},
    ],
    'occasion': [
      { id: 1, url: 'ocasion-template.jpg', title: 'Minimalistyczny'},
      { id: 2, url: 'ocasion-pastel.jpg', title: 'Pastelowy'},
      { id: 3, url: 'ocasion-bw.jpg', title: 'Czarno-biały'},
      { id: 4, url: 'ocasion-vintage.jpg', title: 'Vintage'},
      { id: 5, url: 'ocasion-rustic.jpg', title: 'Rustykalny'},
      { id: 6, url: 'ocasion-modern.jpg', title: 'Nowoczesny'},
    ],
    'birthday': [
      { id: 1, url: 'birthday-template.jpg', title: 'Minimalistyczny'},
      { id: 2, url: 'birthday-pastel.jpg', title: 'Pastelowy'},
      { id: 3, url: 'birthday-bw.jpg', title: 'Czarno-biały'},
      { id: 4, url: 'birthday-vintage.jpg', title: 'Vintage'},
      { id: 5, url: 'birthday-rustic.jpg', title: 'Rustykalny'},
      { id: 6, url: 'birthday-modern.jpg', title: 'Nowoczesny'},
    ]
  },
  layouts: {},
  frames: [
    { width: '0px', style: 'none', radius: '0'},
    { width: '5px', style: 'solid', radius: '0'},
    { width: '5px', style: 'solid', radius: '10%'},
    { width: '5px', style: 'dotted', radius: '0'},
    { width: '5px', style: 'dashed', radius: '0'},
    { width: '5px', style: 'double', radius: '0'},
  ],
  images: [],
  pages: [],
  pageWidth: 0,
  pageHeight: 0,
  currentPage: 0,
  currentElement: null,
  loading: false
})

import Vue from 'vue'

export const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_CURRENT_PAGE_FRAME(state, frame) {
    state.pages[state.currentPage].frame = frame
  },
  ADD_IMAGE(state, imageObj) {
    state.images.push(imageObj)
  },
  ADD_ELEMENT(state, type){
    var page = state.pages[state.currentPage]['elements']
    var id = uuidv4()
    var z = state.pages[state.currentPage]['elements'].length + 1
    if(type === 'image')
      page.push({ id: id, base64: '', file: null, orgImageId: null, zIndex: z, width: 200, height: 200, top: 0, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'})
    else if(type === 'text')
      page.push({ id: id, text: 'Dodaj tekst', zIndex: 1, width: 200, height: 200, top: 0, left: 0, active: false, type: 'text'})
  },
  ADD_STICKER(state, src){
    var page = state.pages[state.currentPage]['elements']
    var id = uuidv4()
    var z = state.pages[state.currentPage]['elements'].length + 1
    page.push({ id: id, src: src, zIndex: z, width: 200, height: 200, top: 0, left: 0, active: false, type: 'sticker'})
  },
  ADD_LAYOUT_ELEMENT(state, element){
    var page = state.pages[state.currentPage]['elements']
    var id = uuidv4()
    var z = state.pages[state.currentPage]['elements'].length + 1
    element['zIndex'] = z
    element['id'] = id
    element['base64'] = ''
    element['file'] = null
    element['orgImageId'] = null
    page.push(element)
  },
  ADD_IMAGE_TO_PAGE(state, imageObj) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == imageObj.itemId)
    obj.base64 = imageObj.base64
    obj.file = imageObj.file
    obj.orgImageId = imageObj.orgImageId
  },
  DELETE_IMAGE_BY_INDEX(state, idx){
    state.images.splice(idx, 1)
  },
  UPDATE_IMAGE_BY_INDEX(state, {newObj, idx}) {
    state.images[idx] = newObj
  },
  UPDATE_IMAGE_FROM_PAGE_BY_INDEX(state, {newObj, idx}) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == idx)
    obj.base64 = newObj.base64
    obj.file = newObj.file
  },
  CHANGE_Z_TO_BOTTOM(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == id)
    if (obj.zIndex === 1){
      return
    }
    obj.zIndex = 1
    page.forEach((image) => {
      if(image !== obj && image.zIndex !== page.length){
        image.zIndex = image.zIndex + 1
      }
    })
  },
  CHANGE_Z_TO_TOP(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == id)
    if (obj.zIndex === page.length){
      return
    }
    obj.zIndex = page.length
    page.forEach((image) => {
      if(image !== obj && image.zIndex !== 1){
        image.zIndex = image.zIndex - 1
      }
    })
    console.log(state.currentElement)
  },
  RESIZE_ELEMENT(state, {newSize, idx}){
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == idx)
    obj.width = newSize.width
    obj.height = newSize.height
    obj.top = newSize.top
    obj.left = newSize.left
  },
  CHANGE_CURRENT_PAGE(state, number){
    state.currentPage = number
  },
  ADD_PAGE(state){
    state.pages.splice(state.currentPage, 0 , {'elements': [], 'backgroundImage': 'color','backgroundColor': '#fff', 'currentLayout' : 0})
  },
  REMOVE_PAGE(state, number){
    state.pages.splice(state.currentPage, 1)
    state.currentPage = number
  },
  UPDATE_BG_IMAGE(state, newBg){
    var page = state.pages[state.currentPage]
    page['backgroundImage'] = newBg
  },
  UPDATE_BG_COLOR(state, newBg){
    var page = state.pages[state.currentPage]
    page['backgroundImage'] = 'color'
    page['backgroundColor'] = newBg
  },
  DELETE_ELEMENT(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var newPage = page.filter((element) => element.id !== id)
    state.pages[state.currentPage]['elements'] = newPage
  },
  DELETE_ALL_ELEMENTS(state){
    state.pages[state.currentPage]['elements'] = []
  },
  DELETE_ALL_PAGES(state){
    state.pages = []
    state.currentPage = 0
  },
  UPDATE_ELEMENT(state, {id, newEl}) {
    const elIdx = state.pages[state.currentPage]['elements'].findIndex(element => element.id === id)
    if(elIdx >= 0) {
      Vue.set(state.pages[state.currentPage]['elements'], elIdx, newEl)
    }
  },
  UPDATE_LAYOUT(state, id){
    var page = state.pages[state.currentPage]
    page['currentLayout'] = id
  },
  SET_FRAME(state, id){
    var frame = state.frames[id]
    var page = state.pages[state.currentPage]['elements']
    var el = page.find(element => element.id == state.currentElement)
    if(el == null)
      return
    el.active = true
    el.frame = frame
  },
  SET_ACTIVE(state, id) {
    state.currentElement = id
    var page = state.pages[state.currentPage]['elements']
    page.forEach((obj) => {
      if(obj.id == id)
        obj.active = true
      else
        obj.active = false
    })
  },
  UNSET_ACTIVE(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var el = page.find(element => element.id == id)
    if(el == null)
      return
    el.active = false;  
  },
  UPDATE_FRAME_COLOR(state, color){
    var page = state.pages[state.currentPage]['elements']
    var el = page.find(element => element.id == state.currentElement)
    if(el == null)
      return
    el.active = true
    el.frameColor = color
  },
  SET_LAYOUTS(state, size){
    state.layouts = {
      1 : [
        { base64: '', file: null, orgImageId: null, zIndex: 1, width: size.width-2, height: size.height-2, top: 0, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'}
      ],
      2 : [
        { base64: '', file: null, orgImageId: null, zIndex: 1, width: size.width/2-4, height: size.height-2, top: 0, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 2, width: size.width/2-4, height: size.height-2, top: 0, left: size.width/2+2, frame: null, frameColor: '#000', active: false, type: 'image'}
      ],
      3 : [
        { base64: '', file: null, orgImageId: null, zIndex: 1, width: size.width-2, height: size.height/2-4, top: 0, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 2, width: size.width-2, height: size.height/2-4, top: size.height/2+2, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'}
      ],
      4 : [
        { base64: '', file: null, orgImageId: null, zIndex: 1, width: size.width/2-4, height: size.height/2-4, top: 0, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 2, width: size.width/2-4, height: size.height/2-4, top: 0, left: size.width/2+2, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 3, width: size.width-2, height: size.height/2-4, top: size.height/2+2, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'}
      ],
      5 : [
        { base64: '', file: null, orgImageId: null, zIndex: 1, width: size.width/2-4, height: size.height-2, top: 0, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 2, width: size.width/2-4, height: size.height/2-4, top: 0, left: size.width/2+2, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 3, width: size.width/2-4, height: size.height/2-4, top: size.height/2+2, left: size.width/2+2, frame: null, frameColor: '#000', active: false, type: 'image'}
      ],
      6 : [
        { base64: '', file: null, orgImageId: null, zIndex: 1, width: size.width/3-3, height: (size.height/3-4)*2, top: 0, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 2, width: (size.width/3-5)*2, height: (size.height/3-4)*2, top: 0, left: size.width/3+8, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 3, width: size.width-2, height: size.height/3-4, top: (size.height/3)*2+2, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
      ],
      7 : [
        { base64: '', file: null, orgImageId: null, zIndex: 1, width: size.width/2-4, height: size.height/2-4, top: 0, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 2, width: size.width/2-4, height: size.height/2-4, top: 0, left: size.width/2+2, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 3, width: size.width/2-4, height: size.height/2-4, top: size.height/2+2, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 4, width: size.width/2-4, height: size.height/2-4, top: size.height/2+2, left: size.width/2+2, frame: null, frameColor: '#000', active: false, type: 'image'}
      ],
      8 : [
        { base64: '', file: null, orgImageId: null, zIndex: 1, width: (size.width/3-5)*2, height: (size.height/3-4)*2, top: 0, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 2, width: (size.width/3-5)*2, height: size.height/3-4, top: (size.height/3)*2+2, left: 0, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 3, width: size.width/3, height: (size.height/3-2)*2, top: size.height/3+2, left: (size.width/3)*2-2, frame: null, frameColor: '#000', active: false, type: 'image'},
        { base64: '', file: null, orgImageId: null, zIndex: 4, width: size.width/3, height: size.height/3-4, top: 0, left: (size.width/3)*2-2, frame: null, frameColor: '#000', active: false, type: 'image'}
      ]
    }
  }
}

export const getters = {
  getTemplatesByCategory: (state) => (category) => {
    return state.allTemplates[category]
  },
  getTemplateById: (state) => (category, id) => {
    return state.allTemplates[category].find(template => template.id == id)
  },
  getPhotos: (state) => state.images,
  getElementFromCurrentPage: (state) => (id) => state.pages[state.currentPage]['elements'].find(element => element.id === id) == undefined ? '' : state.pages[state.currentPage]['elements'].find(element => element.id === id),
  getPages: (state) => state.pages,
  getPageById: (state) => (id) => state.pages[id],
  getCurrentPage: (state) => state.currentPage,
  getFrames: (state) => state.frames,
  getCurrentPageData: (state) => state.pages[state.currentPage],
  getElementsFromLayout: (state) => (id) => state.layouts[id],
  getLoading: (state) => state.loading,
  getCurrentLayout: (state) => state.pages[state.currentPage]['currentLayout']
}
