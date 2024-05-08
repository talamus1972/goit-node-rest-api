
import {HttpError} from "../helpers/index.js";

import Contact from "../models/contact.js";

const getAllContacts = async (req, res, next) => {
  try {
    const { _id: owner } = req.user
    const { page = 1, limit = 20 } = req.query
    const skip = (page-1)*limit
    const result = await Contact.find({owner}, "-createdAt -updatedAt", {skip, limit}).populate("owner", "email");
    res.json(result);
  } catch (error){
    next(error);
  }
};

const getOneContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};


const createContact = async (req, res, next) => {
  try {
    const {_id: owner} = req.user
    const result = await Contact.create({...req.body, owner});
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndDelete(id);
     if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json({message: "Delete success"});
  } catch (error) {
    next(error);
  }
  
};
const updateContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const updateStatusContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateSubscriptionContact = async (req, res, next) => {
   try {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export {getAllContacts, getOneContact, createContact,deleteContact,updateContact,updateStatusContact, updateSubscriptionContact}